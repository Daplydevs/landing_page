// generateSitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { fetchCMSItems } from '../utils/cms'; // Import fetchCMSItems from cms.js

// Function to generate sitemap XML
async function generateSitemap() {
  const baseUrl = 'https://daply.co'; // Your base URL

  // Static URLs
  const staticUrls = [
    { url: '/', changefreq: 'daily', priority: 0.7 }, // Homepage
    { url: '/co', changefreq: 'daily', priority: 0.7 } // Recent news articles page
  ];

  // Dynamic URLs (blog articles)
  const dynamicUrls = await fetchCMSItems(); // Fetch dynamic URLs using fetchCMSItems from cms.js

  // Create sitemap stream
  const sitemapStream = new SitemapStream({ hostname: baseUrl });
  let sitemap = '';

  // Add static URLs to sitemap
  staticUrls.forEach((staticUrl) => {
    sitemapStream.write(staticUrl);
  });

  // Add dynamic URLs to sitemap
  dynamicUrls.forEach((dynamicUrl) => {
    sitemapStream.write(dynamicUrl);
  });

  sitemapStream.end();

  // Generate XML sitemap
  const xmlStream = new Readable();
  xmlStream._read = () => {};
  sitemapStream.pipe(xmlStream);
  sitemap = await streamToPromise(xmlStream).then((data) => data.toString());

  // Save sitemap to file
  const fs = require('fs');
  fs.writeFileSync('./public/sitemap.xml', sitemap);
}

// Run sitemap generation
generateSitemap().then(() => {
  console.log('Sitemap generated successfully.');
}).catch((error) => {
  console.error('Error generating sitemap:', error);
});
