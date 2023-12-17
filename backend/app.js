const fastify = require('fastify')({
  logger: true
});
const { redis } = require('./services/redis');
const cors = require('@fastify/cors');

fastify.register(require('@fastify/websocket'));

fastify.register(cors, {
  origin: '*',
  methods: 'GET,PUT,POST,DELETE,OPTIONS'
});
fastify.register(require('./routes/root'));

const start = async () => {
  try {
    await redis.connect();
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
