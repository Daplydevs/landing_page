// lib/gtag.js
export const GA_TRACKING_ID = 'G-TK5CWG551Q';

// Log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events happening
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
