import { exec } from 'child_process';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Get the absolute path to the generateSitemap.ts script
      const scriptPath = path.resolve(process.cwd(), 'generateSitemap.ts');
      
      // Execute the TypeScript file using ts-node
      exec(`npx ts-node ${scriptPath}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          console.error(`stderr: ${stderr}`);
          return res.status(500).json({ error: 'Failed to generate sitemap', details: stderr });
        }
        console.log(`stdout: ${stdout}`);
        res.status(200).json({ message: 'Sitemap updated successfully' });
      });
    } catch (error) {
      console.error('Error executing sitemap generation script:', error);
      res.status(500).json({ error: 'Failed to generate sitemap', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
