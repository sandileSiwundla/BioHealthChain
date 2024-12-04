import json
import uuid
import os
import boto3
from datetime import datetime

# Get environment variables
USER_POOL_ID = os.getenv('USER_POOL_ID', None)
USER_POOL_CLIENT_ID = os.getenv('USER_POOL_CLIENT_ID', None)
USERS_TABLE = os.getenv('USERS_TABLE', None)
dynamodb = boto3.resource('dynamodb')
cognito_client = boto3.client('cognito-idp')

ddbTable = dynamodb.Table(USERS_TABLE)

def lambda_handler(event, context):
    route_key = f"{event['httpMethod']} {event['resource']}"

    # Set default response, override with data from DynamoDB if any
    response_body = {'Message': 'Unsupported route'}
    status_code = 400
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }

    try:
        # Get a list of all Users (from DynamoDB)
        if route_key == 'GET /users':
            ddb_response = ddbTable.scan(Select='ALL_ATTRIBUTES')
            response_body = ddb_response['Items']
            status_code = 200

        # CRUD operations for a single User

        # Read a user by ID (from DynamoDB)
        if route_key == 'GET /users/{userid}':
            ddb_response = ddbTable.get_item(
                Key={'userid': event['pathParameters']['userid']}
            )
            if 'Item' in ddb_response:
                response_body = ddb_response['Item']
            else:
                response_body = {}
            status_code = 200

        # Delete a user by ID (from DynamoDB)
        if route_key == 'DELETE /users/{userid}':
            ddbTable.delete_item(
                Key={'userid': event['pathParameters']['userid']}
            )
            response_body = {}
            status_code = 200

        # Create a new user via Cognito (extended schema with phone number, address, etc.)
        if route_key == 'POST /users':
            request_json = json.loads(event['body'])

            # Ensure all necessary fields are in the request
            if not request_json.get('email') or not request_json.get('password'):
                raise ValueError('Email and password are required fields.')

            # Assign default user attributes
            user_attributes = [
                {'Name': 'email', 'Value': request_json['email']},
                {'Name': 'name', 'Value': request_json['name']},
                {'Name': 'phone_number', 'Value': request_json.get('phone_number', '')},
                {'Name': 'address', 'Value': request_json.get('address', '')},
                {'Name': 'birthdate', 'Value': request_json.get('birthdate', '')},
            ]

            # Sign up the user in Cognito
            cognito_response = cognito_client.sign_up(
                ClientId=USER_POOL_CLIENT_ID,
                Username=request_json['email'],
                Password=request_json['password'],
                UserAttributes=user_attributes
            )

            # Store additional user info in DynamoDB (this could include metadata or other info)
            request_json['timestamp'] = datetime.now().isoformat()
            request_json['userid'] = str(uuid.uuid1())  # Generate a unique user ID
            ddbTable.put_item(Item=request_json)

            response_body = {'message': 'User created successfully'}
            status_code = 200

        # Update a specific user (from DynamoDB)
        if route_key == 'PUT /users/{userid}':
            request_json = json.loads(event['body'])
            request_json['timestamp'] = datetime.now().isoformat()
            request_json['userid'] = event['pathParameters']['userid']
            ddbTable.put_item(Item=request_json)
            response_body = request_json
            status_code = 200

        # Login a user (authenticate via Cognito)
        if route_key == 'POST /login':
            response = login_user(event, context)
            return response

    except Exception as err:
        status_code = 400
        response_body = {'Error': str(err)}
        print(str(err))

    return {
        'statusCode': status_code,
        'body': json.dumps(response_body),
        'headers': headers
    }

def login_user(event, context):
    """Handles user login via Cognito"""
    try:
        # Get the email and password from the request
        request_json = json.loads(event['body'])
        email = request_json['email']
        password = request_json['password']

        # Authenticate using Cognito
        response = cognito_client.initiate_auth(
            ClientId=USER_POOL_CLIENT_ID,
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': email,
                'PASSWORD': password
            }
        )

        # Return the authentication token
        return {
            'statusCode': 200,
            'body': json.dumps({'id_token': response['AuthenticationResult']['IdToken']}),
            'headers': {'Content-Type': 'application/json'}
        }
    
    except cognito_client.exceptions.NotAuthorizedException:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Invalid credentials'}),
            'headers': {'Content-Type': 'application/json'}
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Internal Server Error', 'error': str(e)}),
            'headers': {'Content-Type': 'application/json'}
        }
