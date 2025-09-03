import { create } from 'ipfs-http-client'; // Using ESM import
import fs from 'fs';

// Connect to your local IPFS node (make sure it's running on the default port)
const ipfs = create({ url: 'http://localhost:5001/api/v0' });

async function uploadFile() {
  try {
    // Read the file you want to upload (replace 'example.txt' with your file)
    const file = fs.readFileSync('A.json');

    // Add the file to IPFS
    const result = await ipfs.add(file);
    
    // Output the result (IPFS hash of the uploaded file)
    console.log(`File uploaded successfully! IPFS hash: ${result.path}`);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}

uploadFile();
