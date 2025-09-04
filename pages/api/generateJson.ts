import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { healthcareProfessionalName, healthcareProviderId, profession, location } = req.body;

    const pythonScriptPath = path.resolve(process.cwd(), 'scripts', 'uploadData.py');

    const command = `python3 ${pythonScriptPath} "${healthcareProfessionalName}" "${healthcareProviderId}" "${profession}" "${location}"`;

    try {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return res.status(500).json({ error: 'Error executing Python script', details: stderr });
        }




        console.log(stdout);
        res.status(200).json({ message: 'JSON file created successfully', filePath: 'formData.json' });
      });
    } catch (error) {
      console.error('Error executing Python script:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}