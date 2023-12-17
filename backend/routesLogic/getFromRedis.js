const { hGetAll } = require('../services/redis');

module.exports = async (req, reply) => {
  const data = await hGetAll(String(req.query.key));
  reply.send(data);
};
