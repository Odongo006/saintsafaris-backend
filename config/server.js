module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['1BHynDp83Hgq65tXQLpOhg==', 'zj+CSMvhQ8o7FOIKXhat2w==', 'KczFToS2glLqFqFuo/HH7g==', 'iG5zzSpvsM9+yHd0zF90aQ=='], // Add keys manually here
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  logger: {
    level: 'debug', // Log level
    exposeInContext: true, // Makes the logger available
    requests: true, // Logs HTTP requests
  },
});
