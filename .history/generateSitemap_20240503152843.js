import fetch from 'node-fetch';
import { writeFileSync } from 'fs/promises';

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
    const baseUrl = 'https://app.daply.co'; // Your base URL

    // Static URLs
    const staticUrls = [
        { url: '/', changefreq: 'daily', priority: 0.7 }, // Homepage
        { url: '/co', changefreq: 'daily', priority: 0.7 } // Recent news articles page
    ];

    // Dynamic URLs (blog articles)
    const dynamicUrls = await fetchCMSItems(); // Fetch dynamic URLs using fetchCMSItems function

    // Combine static and dynamic URLs
    const allUrls = [...staticUrls, ...dynamicUrls];

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
