// pages/api/update-sitemap.js
import { exec } from 'child_process';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get the absolute path to the generateSitemap.mjs script
    const scriptPath = path.resolve('generateSitemap.js');
    exec(`node ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        console.error(`stderr: ${stderr}`);
        return res.status(500).json({ error: 'Failed to generate sitemap', details: stderr });
      }
      console.log(`stdout: ${stdout}`);
      res.status(200).json({ message: 'Sitemap updated successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
