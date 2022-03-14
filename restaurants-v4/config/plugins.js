module.exports = ({env}) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        }
      },
      settings: {
        defaultFrom: 'micaelribouradossantos@gmail.com',
        defaultReplyTo: 'micaelribouradossantos@gmail.com'
      },
    }
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: env.bool('GRAPHQL_PLAYGROUND', false),
      dephtLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: env.bool('GRAPHQL_TRACING', false),
      },
    }
  },
  seo: {
    enabled: true,
  }
});
