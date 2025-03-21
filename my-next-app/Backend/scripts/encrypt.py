import sys
from cryptography.fernet import Fernet

# Load key (or generate & save one)
key = Fernet.generate_key()
cipher = Fernet(key)

def encrypt_file(file_path):
    with open(file_path, "rb") as f:
        data = f.read()
    
    encrypted_data = cipher.encrypt(data)

    # Save encrypted file
    encrypted_file = file_path + ".enc"
    with open(encrypted_file, "wb") as f:
        f.write(encrypted_data)
    
    print(f"File encrypted and saved as: {encrypted_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python encrypt.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    encrypt_file(file_path)
