# import sys
# from cryptography.fernet import Fernet
# import time
# import json
# import os

# key = Fernet.generate_key()
# cipher = Fernet(key)

# def encrypt_file(file_path):
#     with open(file_path, "rb") as f:
#         data = f.read()
    
#     encrypted_data = cipher.encrypt(data)

#     # Save encrypted file
#     encrypted_file = file_path + ".enc"
#     with open(encrypted_file, "wb") as f:
#         f.write(encrypted_data)
    
#     print(f"File encrypted and saved as: {encrypted_file}")

# def save_encryption_key():
#     # Get current time and format it
#     named_tuple = time.localtime()
#     dateNtime = time.strftime("%m/%d/%Y,%H:%M:%S", named_tuple)
#     date, hour = dateNtime.split(",")

#     # Correctly format the dictionary
#     new_Key = {
#         'date': date,
#         'time': hour,
#         'key': key.decode('utf-8')  # Convert the key to a string for storage
#     }

#     # Define the path to save the encryption keys
#     encryption_keys_path = os.path.join(os.getcwd(), "data", "encryptionKeys.json")

#     # Check if file exists, and read existing keys if it does
#     if os.path.exists(encryption_keys_path):
#         with open(encryption_keys_path, "r") as f:
#             # Try to load existing keys; if file is empty, initialize an empty list
#             try:
#                 encryption_keys = json.load(f)
#             except json.JSONDecodeError:
#                 encryption_keys = []  # If the file is empty or invalid, initialize as an empty list
#     else:
#         encryption_keys = []

#     # Append the new key
#     encryption_keys.append(new_Key)

#     # Save the updated encryption keys
#     with open(encryption_keys_path, "w") as f:
#         json.dump(encryption_keys, f, indent=4)

#     print(f"Encryption key saved with timestamp {dateNtime}.")

# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print("Usage: python encrypt.py <file_path>")
#         sys.exit(1)

#     file_path = sys.argv[1]
#     encrypt_file(file_path)
#     save_encryption_key()