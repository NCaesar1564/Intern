const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'public/data.json'));
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    '/articles/:hashtags': '/articles?hashtags=:hashtags'
  })
);

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log('JSON Server is running at http://localhost:4000');
});
