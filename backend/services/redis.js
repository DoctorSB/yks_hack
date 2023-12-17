const { createClient } = require('redis');

const redis = createClient({
  url: 'redis://redis:6379'
});

redis.on('error', (err) => console.log('Redis Client Error: ', err));

module.exports = {
  redis,
  set: async (key, value) => {
    await redis.set(key, value);
    return 'OK';
  },
  hSet: async (key, data) => {
    await redis.hSet(key, JSON.parse(data));
    return 'OK';
  },
  get: async (key) => {
    const value = await redis.get(key);
    return value;
  },
  hGetAll: async (key) => {
    const data = await redis.hGetAll(key);
    return data;
  }
};
