// pages/api/update-sitemap.js
import { exec } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    exec('node path/to/generateSitemap.mjs', (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({ error: 'Failed to generate sitemap' });
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.status(200).json({ message: 'Sitemap updated successfully' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
