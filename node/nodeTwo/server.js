const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
