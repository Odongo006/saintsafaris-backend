module.exports = ({ env }) => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '30min',
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.mailgun.org'),
        port: env('SMTP_PORT', 587),
        secure: false, // Set to false to allow self-signed certificates
        auth: {
          user: env('MAILGUN_USER'),
          pass: env('MAILGUN_PASS'),
        },
        tls: {
          rejectUnauthorized: false, // Allow self-signed certificates
        },
      },
      settings: {
        defaultFrom: 'no-reply@saintsafaris.com',
        defaultReplyTo: 'info@saintsafaris.com',
      },
    },
  },
});
