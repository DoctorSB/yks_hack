const fastify = require('fastify')({
  logger: true
});

fastify.register(require('@fastify/cors'), {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE,OPTIONS'
});

fastify.register(require('./routes/root'));

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
