// generateSitemap.mjs

import fetch from 'node-fetch';
import { writeFile } from 'fs/promises';

// Import Plasmic-related components
import { PLASMIC, extractPlasmicQueryData, PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";

// Define the fetchCMSItems function directly in generateSitemap.js
async function fetchCMSItems() {
    try {
        // Find your CMS ID and Public Token from the settings page
        const CMS_ID = 'vXWXChZbjardDsEzxW9r1w';
        const CMS_PUBLIC_TOKEN = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';

        // Find your model's unique identifier from its model schema page
        const modelId = 'posts';

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

        const posts = parsedResponse.rows;

        // Extract titles from the response data and use them as slugs
        const slugs = posts.map(post => ({
            url: `/co/${encodeURIComponent(post.data.title)}`, // Assuming the title is stored in the title field of the data object
            changefreq: 'daily',
            priority: 0.5
        }));

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
    console.log('Starting sitemap generation...');
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
        const sitemapPath = './public/sitemap.xml';
        console.log(`Writing sitemap to ${sitemapPath}`);
        await writeFile(sitemapPath, xml);
        console.log('Sitemap generated successfully.');
    } catch (error) {
        console.error('Error generating sitemap:', error);
    }
}

// Run sitemap generation
generateSitemap();

// Import Plasmic-related components
import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Error from "next/error";
import { useRouter } from "next/router";
import { PLASMIC } from "@/plasmic-init";

// Define the cache-all.tsx functionality
export default function PlasmicLoaderPage(props: {
  plasmicData?: ComponentRenderData;
  queryCache?: Record<string, any>;
}) {
  const { plasmicData, queryCache } = props;
  const router = useRouter();
  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    return <Error statusCode={404} />;
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      prefetchedQueryData={queryCache}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
      pageQuery={router.query}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

// Implement getStaticProps for caching
export const getStaticProps: GetStaticProps = async (context) => {
  const { catchall } = context.params ?? {};
  const plasmicPath = typeof catchall === 'string' ? catchall : Array.isArray(catchall) ? `/${catchall.join('/')}` : '/';
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    // non-Plasmic catch-all
    return { props: {} };
  }
  const pageMeta = plasmicData.entryCompMetas[0];
  // Cache the necessary data fetched for the page
  const queryCache = await extractPlasmicQueryData(
    <PlasmicRootProvider
      loader={PLASMIC}
      prefetchedData={plasmicData}
      pageRoute={pageMeta.path}
      pageParams={pageMeta.params}
    >
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
  // Use revalidate if you want incremental static regeneration
  return { props: { plasmicData, queryCache }, revalidate: 60 };
}

// Implement getStaticPaths for dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  const pageModules = await PLASMIC.fetchPages();
  return {
    paths: pageModules.map((mod) => ({
      params: {
        catchall: mod.path.substring(1).split("/"),
      },
    })),
    fallback: false, // Change "false" to false
  };
}
