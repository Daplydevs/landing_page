// Find your CMS ID and Public Token from the settings page.
const CMS_ID = 'vXWXChZbjardDsEzxW9r1w';
const CMS_PUBLIC_TOKEN = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';

// Find your model's unique identifier from its model schema page.
const modelId = 'posts';

// Define an async function to fetch CMS items
async function fetchCMSItems() {
  try {
    // Load all model entries
    const response = await fetch(`https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/query`, {
      headers: {
        // Your CMS ID and CMS Public API token
        'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
      }
    });

    const parsedResponse = await response.json();
    console.log(parsedResponse);

    const testimonials = parsedResponse.rows;
    // Use the fetched CMS items as needed
  } catch (error) {
    console.error('Error fetching CMS items:', error);
  }
}

// Call the async function to fetch CMS items
fetchCMSItems();
