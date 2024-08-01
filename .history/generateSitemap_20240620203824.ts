import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import { PLASMIC } from './plasmic-init'; // Adjust the path to your plasmic-init file

interface Post {
    data: {
        title: string;
        // Add other fields if necessary
    }
}

// Define the fetchCMSItems function directly in generateSitemap.ts
async function fetchCMSItems(): Promise<{ url: string, changefreq: string, priority: number }[]> {
    try {
        // Find your CMS ID and Public Token from the settings page
        const CMS_ID: string = 'vXWXChZbjardDsEzxW9r1w';
        const CMS_PUBLIC_TOKEN: string = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';

        // Find your model's unique identifier from its model schema page
        const modelId: string = 'posts';

        console.log(`Fetching CMS items from model ID: ${modelId}`);

        // Load all model entries
        const response = await fetch(`https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/query`, {
            headers: {
                // Your CMS ID and CMS Public API token
                'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch CMS items: ${response.statusText}`);
        }

        const parsedResponse = await response.json();
        console.log('Fetched CMS items:', parsedResponse);

        const posts: Post[] = parsedResponse.rows.map((row: any) => ({ data: row.data }));

        // Extract titles from the response data and use them as slugs
        const slugs = posts.map((post: Post) => ({
            url: `/co/${encodeURIComponent(post.data.title)}`, // Assuming the title is stored in the title field of the data object
            changefreq: 'daily',
            priority: 0.5
        }));

        // Remove duplicates
        const uniqueSlugs = slugs.filter((slug, index, self) =>
            index === self.findIndex((s) => s.url === slug.url)
        );

        return uniqueSlugs; // Return the unique slugs
    } catch (error) {
        console.error('Error fetching CMS items:', error);
        return []; // Return an empty array if an error occurs
    }
}

// Function to generate sitemap XML
async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const baseUrl = 'https://app.daply.co'; // Your base URL

    // Static URLs
    const staticUrls = [
        { url: '/', changefreq: 'daily', priority: 0.7 }, // Homepage
        { url: '/co', changefreq: 'daily', priority: 0.7 } // Recent news articles page
    ];

    try {
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
        const sitemapPath = './public/sitemap.xml';
        console.log(`Writing sitemap to ${sitemapPath}`);
        await writeFile(sitemapPath, xml);
        console.log('Sitemap generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Exporting getStaticPaths for Next.js
export const getStaticPaths = async () => {
    try {
        // Fetch pages dynamically from Plasmic or other CMS
        const pageModules = await PLASMIC.fetchPages(); // Replace with your actual function to fetch pages

        return {
            paths: pageModules.map((mod: any) => ({
                params: {
                    catchall: mod.path.substring(1).split("/"),
                },
            })),
            fallback: false,
        };
    } catch (error) {
        console.error('Error fetching pages:', error);
        return {
            paths: [],
            fallback: false,
        };
    }
};

// Run sitemap generation
generateSitemap();
