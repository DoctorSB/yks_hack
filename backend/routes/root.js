const axios = require('axios');

async function routes(fastify) {
  fastify.get('/', async (req, reply) => {
    await axios(
      {
        method: 'POST',
        url: 'http://model:5000/generate',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        data: JSON.stringify({ text: req.query.text })
      }
    )
    .then((modelResponse) => {
      reply.send({response: modelResponse.data.response});
    })
    .catch((error) => {
      console.log('Model Response Error: ', error.cause);
      reply.send('Возникла ошибка. Не могу дать ответ в такой ситуации');
    });
  });
}

module.exports = routes;
