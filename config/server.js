module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://saintapi.koyeb.app'), // Ensure HTTPS backend URL

  proxy: true, // ✅ Trust Koyeb's proxy to properly handle HTTPS requests

  app: {
    keys: env.array('APP_KEYS'),
  },

  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },

  logger: {
    level: 'debug',
    exposeInContext: true,
    requests: true,
  },

  settings: {
    session: {
      enabled: true,
      cookie: {
        secure: env.bool('COOKIE_SECURE', true), // ✅ Force secure cookies
        httpOnly: true,
        sameSite: 'strict', // ✅ Prevent cross-site attacks
      },
    },
  },
});
