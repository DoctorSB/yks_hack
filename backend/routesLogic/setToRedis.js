const { hSet } = require('../services/redis');

module.exports = async (req, reply) => {
  try {
    await hSet(req.body.key, req.body.data);
    reply.send('OK');
  } catch (error) {
    console.log('Redis Set Error: ', error);
  }
};
