#!/bin/bash
#this scripts use aws cli to log in to Cognito using below user details and return the idToken
#this idToken can be used as the Bearer token value for API calls that are autenticated with Cognito
#NOTE: this script adds an extra return (\n) at end of idToken, so if you paste it in as the Bearer token, backspace to remove that return character
#
# Steps:
# 1. first install AWS CLI tools, and setup your AWS Key and Secret credentials as a profile
# 2. Create a  user manually in your cognito user pool (make sure this is the one speciifed for use for authentication by the API Gateway endpoints)
# 3. fill in your test user details below (and do not commit the details to a repo)
#
username="sandilemsiwunndla@gmail.com"
password="Naruto2001"
clientid="271uignt5k36fqtg6s2c9gggfs"
region="eu-west-1" #check this matches the region you deploy to
aws_profile="My web app - bySS"

response_json=""
json_field='IdToken'

token_request=`aws cognito-idp initiate-auth --auth-flow USER_PASSWORD_AUTH --output json --region $region --client-id $clientid --auth-parameters USERNAME=$username,PASSWORD=$password --profile $aws_profile`

# parse json
function jsonval {
    temp=`echo $response_json | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w $json_field`
    echo ${temp##*|}
}

response_json=$token_request
access_token=`jsonval`
result=$access_token

#Strip IdToken field and copy to clipboard
token="$(cut -d':' -f2 <<<"$result")"
echo $token | xargs | pbcopy