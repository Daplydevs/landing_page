import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

// Define the fetchCMSItems function directly in generateSitemap.js
async function fetchCMSItems() {
  try {
    // Find your CMS ID and Public Token from the settings page
    const CMS_ID = 'vXWXChZbjardDsEzxW9r1w';
    const CMS_PUBLIC_TOKEN = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';

    // Find your model's unique identifier from its model schema page
    const modelId = 'posts';

    // Load all model entries
    const response = await fetch(`https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/query`, {
      headers: {
        // Your CMS ID and CMS Public API token
        'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
      }
    });

    const parsedResponse = await response.json();
    console.log(parsedResponse);

    const posts = parsedResponse.rows;

    // Extract titles from the response data and use them as slugs
    const slugs = posts.map(post => ({
      url: `/co/${encodeURIComponent(post.data.title)}`, // Assuming the title is stored in the title field of the data object
      changefreq: 'daily',
      priority: 0.5
    }));

    // Log the slugs for verification
    console.log('Generated slugs:', slugs);

    return slugs; // Return the generated slugs
  } catch (error) {
    console.error('Error fetching CMS items:', error);
    return []; // Return an empty array if an error occurs
  }
}

// Function to generate sitemap XML
async function generateSitemap() {
  const baseUrl = 'https://daply.co'; // Your base URL

  // Static URLs
  const staticUrls = [
    { url: '/', changefreq: 'daily', priority: 0.7 }, // Homepage
    { url: '/co', changefreq: 'daily', priority: 0.7 } // Recent news articles page
  ];

  // Dynamic URLs (blog articles)
  const dynamicUrls = await fetchCMSItems(); // Fetch dynamic URLs using fetchCMSItems function

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
