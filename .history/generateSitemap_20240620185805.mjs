import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';
import { PLASMIC } from '/plasmic-init'; // Ensure this import is correct and points to your Plasmic initialization

// Fetch CMS items from Plasmic API
async function fetchCMSItems() {
    try {
        const CMS_ID = 'vXWXChZbjardDsEzxW9r1w';
        const CMS_PUBLIC_TOKEN = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';
        const modelId = 'posts';

        console.log(`Fetching CMS items from model ID: ${modelId}`);

        const response = await fetch(`https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/query`, {
            headers: {
                'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch CMS items: ${response.statusText}`);
        }

        const parsedResponse = await response.json();
        console.log('Fetched CMS items:', parsedResponse);

        const posts = parsedResponse.rows;

        const slugs = posts.map(post => ({
            url: `/co/${encodeURIComponent(post.data.title)}`,
            changefreq: 'daily',
            priority: 0.5
        }));

        const uniqueSlugs = slugs.filter((slug, index, self) =>
            index === self.findIndex(s => s.url === slug.url)
        );

        return uniqueSlugs;
    } catch (error) {
        console.error('Error fetching CMS items:', error);
        return [];
    }
}

// Fetch dynamic paths from Plasmic
async function fetchPlasmicPaths() {
    try {
        const pageModules = await PLASMIC.fetchPages();
        const paths = pageModules.map(mod => ({
            url: `/${mod.path}`,
            changefreq: 'daily',
            priority: 0.7
        }));

        const uniquePaths = paths.filter((path, index, self) =>
            index === self.findIndex(p => p.url === path.url)
        );

        return uniquePaths;
    } catch (error) {
        console.error('Error fetching Plasmic paths:', error);
        return [];
    }
}

// Generate sitemap XML
async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const baseUrl = 'https://app.daply.co';

    const staticUrls = [
        { url: '/', changefreq: 'daily', priority: 0.7 },
        { url: '/co', changefreq: 'daily', priority: 0.7 }
    ];

    const dynamicUrls = await fetchCMSItems();
    const plasmicUrls = await fetchPlasmicPaths();

    const allUrls = [...staticUrls, ...dynamicUrls, ...plasmicUrls];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    allUrls.forEach(urlObject => {
        xml += `<url>\n`;
        xml += `<loc>${baseUrl}${urlObject.url}</loc>\n`;
        xml += `<changefreq>${urlObject.changefreq}</changefreq>\n`;
        xml += `<priority>${urlObject.priority}</priority>\n`;
        xml += `</url>\n`;
    });
    xml += '</urlset>';

    try {
        const sitemapPath = './public/sitemap.xml';
        console.log(`Writing sitemap to ${sitemapPath}`);
        await writeFile(sitemapPath, xml);
        console.log('Sitemap generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

generateSitemap();
