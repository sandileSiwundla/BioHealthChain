#!/bin/bash

mkdir ~/install



# Install Python 3.9
cd ~/install
wget 'https://www.python.org/ftp/python/3.9.10/Python-3.9.10.tgz'
echo 'Extracting Python 3.9...'
tar xvf Python-3.9.10.tgz > /dev/null 2>&1
cd Python-*/
./configure --enable-optimizations
sudo make altinstall
echo 'Python 3.9 installed!'

# Set Python 3.9 as the default
alias python="python3.9"
echo -e 'alias python="python3.9" ' >> ~/.bashrc 

# Upgrade to latest version of AWS SAM 
cd ~/install
wget 'https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip'
unzip aws-sam-cli-linux-x86_64.zip -d sam-installation
sudo ./sam-installation/install --update

# Upgrade to latest AWS CLI version
cd ~/install
wget https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip
unzip awscli-exe-linux-x86_64.zip
sudo ./aws/install --update

# Upgrade to latest AWS CDK
cd ~/install
LATEST_CDK_URL=$(curl -s https://api.github.com/repos/aws/aws-cdk/releases/latest | grep -oP '"zipball_url": "\K[^"]+')
wget $LATEST_CDK_URL -O cdk-latest.zip
unzip cdk-latest.zip -d cdk-latest
sudo npm install -g ./cdk-latest/aws-aws-cdk-*/
unset LATEST_CDK_URL

# Install Python libraries
python3.9 -m pip install --upgrade pip
python3.9 -m pip install aws-lambda-powertools
python3.9 -m pip install boto3 
python3.9 -m pip install numpy

# Return to the environment directory where we started
cd ~/environment
pwd
echo 'Setup complete!'