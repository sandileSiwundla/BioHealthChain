import simplejson as json
import os
import boto3

# Initialize DynamoDB client
client = boto3.client('dynamodb')

# Function to prepare the unit data using parameters
def prepare_unit_data(unit_id, unit_type, price, status):
    return {
        'UnitID': {'N': str(unit_id)},  # Ensure unit_id is a string as per DynamoDB expectations
        'Type': {'S': unit_type},
        'Price': {'S': price},
        'Status': {'S': status} # e.g., 'Available'
          # Description of the unit
    }

# Lambda handler
def lambda_handler(event, context):
    try:
        # Extract data from the incoming event (e.g., API Gateway or another source)
        unit_details = json.loads(event['body'])  # Assuming the data is passed as JSON in the request body
        
        # Now pass the extracted data to the function to prepare the unit data
        unit_data = prepare_unit_data(
            unit_id=unit_details['UnitID'],
            unit_type=unit_details['UnitType'],
            price=unit_details['Price'],
            status=unit_details['Status']
        )

        # Perform the put_item operation to store the new unit data in DynamoDB
        data = client.put_item(
            TableName='listUnits',
            Item=unit_data  # Use the data returned from the function
        )

        # Prepare the response
        response = {
            "statusCode": 200,
            "headers": {},
            "body": json.dumps({
                "message": "Unit successfully created.",
                "unit": unit_data  # Return the unit data that was created
            })
        }
        return response
    
    except Exception as e:
        # Handle any errors that occur during the execution
        response = {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e)
            })
        }
        return response
