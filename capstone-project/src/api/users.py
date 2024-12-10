import json
import random
import boto3
from datetime import datetime
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
booking_table = dynamodb.Table('BookingTable')
units_table = dynamodb.Table('listUnits')

def generate_booking_id():
    return random.randint(100000, 999999)

def update_unit_status_to_reserved(unit_id):
    try:
        units_table.update_item(
            Key={'UnitID': unit_id},
            UpdateExpression="SET #status = :reserved",
            ExpressionAttributeNames={'#status': 'Status'},
            ExpressionAttributeValues={':reserved': 'reserved'}
        )
        logger.info(f"Status updated to 'reserved' for UnitID: {unit_id}")
    except Exception as e:
        logger.error(f"Error updating status for UnitID {unit_id}: {e}")
        raise

def check_double_booking(unit_id, start_date, end_date):
    try:
        response = booking_table.query(
            IndexName='UnitID-StartDate-EndDate-index',
            KeyConditionExpression="UnitID = :unit_id and StartDate < :end_date and EndDate > :start_date",
            ExpressionAttributeValues={
                ":unit_id": unit_id,
                ":start_date": start_date,
                ":end_date": end_date
            }
        )
        return response['Items']
    except Exception as e:
        logger.error(f"Error checking for double booking: {e}")
        raise

def lambda_handler(event, context):
    logger.info(f"Received event: {json.dumps(event)}")

    booking_id = generate_booking_id()

    unit_id = event.get('UnitID')
    if not unit_id:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'UnitID is required'})
        }

    price = event.get('Price', 240.0)
    type_ = event.get('Type', 'Locker')
    user_id = event.get('UserID', 'Anonymous')
    billing_option = event.get('BillingOption', 'Standard')
    end_date = event.get('EndDate', str(datetime.now().date()))
    payment_method = event.get('PaymentMethod', 'Credit Card')
    start_date = event.get('StartDate', str(datetime.now().date()))
    status = event.get('Status', 'Pending')
    unlocked = event.get('Unlocked', False)
    authorized_user = event.get('AuthorizedUser', '-')  # Default value is '-'

    logger.info(f"Booking data: BookingId={booking_id}, UnitID={unit_id}, Price={price}, Type={type_}, UserID={user_id}")

    double_bookings = check_double_booking(unit_id, start_date, end_date)
    if double_bookings:
        return {
            'statusCode': 400,
            'body': json.dumps({'message': 'Unit is already booked for the selected dates'})
        }

    try:
        booking_table.put_item(
            Item={
                'BookingId': int(booking_id),
                'BillingOption': billing_option,
                'EndDate': end_date,
                'PaymentMethod': payment_method,
                'Price': price,
                'StartDate': start_date,
                'Status': status,
                'Type': type_,
                'UnitID': unit_id,
                'Unlocked': unlocked,
                'UserID': user_id,
                'AuthorizedUser': authorized_user  # Added AuthorizedUser field
            }
        )

        update_unit_status_to_reserved(unit_id)

        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Booking created successfully', 'BookingId': booking_id, 'UnitID': unit_id})
        }

    except Exception as e:
        logger.error(f"Error creating booking: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Error creating booking', 'error': str(e)})
        }
