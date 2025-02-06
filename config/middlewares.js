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
        'https://saintapi.koyeb.app', // Backend URL
        'http://localhost:5173', // Local frontend
        'https://www.saintsafaris.com', // Production frontend
        'https://saintsafaris.com', // Production frontend
        'http://localhost:1337',
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      credentials: true, // Allow credentials (cookies, authorization headers)
    },
  },
];
