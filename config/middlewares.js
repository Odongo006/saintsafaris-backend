module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://saintsafaris.com',  // Primary frontend
        'https://www.saintsafaris.com',  // Alternative frontend
        'http://localhost:5173',  // Local frontend for development
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true, // Allow cookies and authorization headers
    },
  },
];
