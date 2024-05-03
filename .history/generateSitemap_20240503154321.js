import fetch from 'node-fetch';
import { writeFileSync } from 'fs/promises';

// Define the fetchCMSItems function directly in generateSitemap.js
async function fetchCMSItems() {
  try {
      // Your existing code to fetch CMS items...

      const posts = parsedResponse.rows;

      // Extract titles from the response data and use them as slugs
      const slugs = posts.map(post => ({
          url: `/co/${encodeURIComponent(post.data.title)}`, // Assuming the title is stored in the title field of the data object
          changefreq: 'daily',
          priority: 0.5
      }));

      // Log the slugs for verification
      console.log('Generated slugs:', slugs);

      // Remove duplicates
      const uniqueSlugs = slugs.filter((slug, index, self) =>
          index === self.findIndex(s => s.url === slug.url)
      );

      return uniqueSlugs; // Return the unique slugs
  } catch (error) {
      console.error('Error fetching CMS items:', error);
      return []; // Return an empty array if an error occurs
  }
}


// Function to generate sitemap XML
async function generateSitemap() {
    const baseUrl = 'https://app.daply.co'; // Your base URL

    // Static URLs
    const staticUrls = [
        { url: '/', changefreq: 'daily', priority: 0.7 }, // Homepage
        { url: '/co', changefreq: 'daily', priority: 0.7 } // Recent news articles page
    ];

    // Dynamic URLs (blog articles)
    const dynamicUrls = await fetchCMSItems(); // Fetch dynamic URLs using fetchCMSItems function

    console.log('Dynamic URLs before filtering:', dynamicUrls);

    // Filter out duplicate dynamic URLs
    const uniqueDynamicUrls = dynamicUrls.filter((url, index, self) =>
        index === self.findIndex((u) => u.url === url.url)
    );

    console.log('Dynamic URLs after filtering:', uniqueDynamicUrls);

    // Combine static and unique dynamic URLs
    const allUrls = [...staticUrls, ...uniqueDynamicUrls];

    // Generate XML sitemap
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    allUrls.forEach((urlObject) => {
        xml += `<url>\n`;
        xml += `<loc>${baseUrl}${urlObject.url}</loc>\n`;
        xml += `<changefreq>${urlObject.changefreq}</changefreq>\n`;
        xml += `<priority>${urlObject.priority}</priority>\n`;
        xml += `</url>\n`;
    });
    xml += '</urlset>';

    // Save sitemap to file
    try {
        await writeFileSync('./public/sitemap.xml', xml);
        console.log('Sitemap generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Run sitemap generation
generateSitemap();
