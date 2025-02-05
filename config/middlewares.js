module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:4173', // Local frontend URL
        'https://saintsafaris.com', // Production frontend URL
        'https://www.saintsafaris.com', // Production frontend URL
        'https://saintapi.koyeb.app', // Backend URL (if needed)
        'http://localhost:1337/'
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Include OPTIONS for preflight requests
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'], // Allowed headers
      credentials: true, // Allow credentials (e.g., cookies, authorization headers)
    },
  },
];