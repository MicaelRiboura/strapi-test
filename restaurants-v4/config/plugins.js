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
  },
  // "measurement-protocol": {
  //   config: {
  //     apiSecret: '',
  //     measurementId: '',
  //     useValidationServer: false,
  //   }
  // },
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath : 'migrations'
    },
  },
  'transformer': {
    enabled: true,
    config: {
      prefix: '/api/'
    }
  },
  scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ['api::page.page'],
      entryLabel: {
          '*': ['Title', 'title', 'Name', 'name', 'Subject', 'subject'],
          'api::page.page': ['MyField'],
      },
      reportReasons: {
          'MY_CUSTOM_REASON': 'MY_CUSTOM_REASON',
      },
      gql: {
        // ...
      },
    },
  },
});
