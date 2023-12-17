const setToRedis = require('../routesLogic/setToRedis');
const getFromRedis = require('../routesLogic/getFromRedis');
const { set, get } = require('../services/redis');
const axios = require('axios');

async function routes(fastify) {
  // fastify.get('/socket', { websocket: true }, async (connection) => {
  //   connection.socket.on('message', async (message) => {
  //     let response;
  //     const redisData = await get(message);
  //     if (redisData) {
  //       console.log('from redis');
  //       response = redisData;
  //     } else {
  //       console.log('from ML');
  //       response = Math.random() * 100;
  //       await set(message, response);
  //     }
  //     connection.socket.send(response);
  //   });
  // });
  fastify.get('/', async (req, reply) => {
    // reply.header('Access-Control-Allow-Origin', '*');
    await axios(
      {
        method: 'POST',
        url: 'http://172.21.0.2:5000/generate',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        data: JSON.stringify({ text: req.query.text })
      }
    ).then((res) => {
      console.log(`statusCode: ${res.status}`);
      reply.send({response: res.data.response});
    }).catch((error) => {
      console.log('Model Response Error: ', error.cause);
      reply.send('Не могу дать ответ в такой ситуации');
    });
  });
  // fastify.get('/', async (req, reply) => {
  //   reply.send('Не могу дать ответ в такой ситуации');
  // });
}

module.exports = routes;
