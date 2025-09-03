# import required module
from cryptography.fernet import Fernet

key = 'CedQD0qem0dz6rOiXLcjT_-Z7KDZzKK7rGy35m4ctpw='
fernet = Fernet(key)

with open('A.json', 'rb') as enc_file:
	encrypted = enc_file.read()

# decrypting the file
decrypted = fernet.decrypt(encrypted)

# opening the file in write mode and
# writing the decrypted data
with open('A.json', 'wb') as dec_file:
	dec_file.write(decrypted)
