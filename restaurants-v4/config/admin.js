module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ca01cf20cd6374b47d46901d670ed597'),
  },
});
