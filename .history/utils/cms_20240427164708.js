// Your actual CMS ID and public token
const CMS_ID = 'vXWXChZbjardDsEzxW9r1w';
const CMS_PUBLIC_TOKEN = 'Y0d7mUhcWGDfaiQZlnXH59d9txUClwxgeJicbM5aDgLQULELR4ifTCMJa6iUu2JQJZOmijqujM6kHMFJ45lg';

// Unique identifier of the model from which you want to fetch entries
const modelId = 'posts';

// Fetch all model entries from the CMS
const response = await fetch(`https://data.plasmic.app/api/v1/cms/databases/${CMS_ID}/tables/${modelId}/query`, {
  headers: {
    // Include your CMS ID and public token in the request headers
    'x-plasmic-api-cms-tokens': `${CMS_ID}:${CMS_PUBLIC_TOKEN}`
  }
});

// Parse the JSON response
const parsedResponse = await response.json();
console.log(parsedResponse);

// Extract the rows of model entries
const testimonials = parsedResponse.rows;

// Now you can use the fetched data (testimonials) in your application logic
