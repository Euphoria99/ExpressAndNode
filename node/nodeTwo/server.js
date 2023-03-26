const http = require('node:http');

const server = http.createServer((req, res) => {
    const superHero = {
      firstname: 'Bruce',
      lastName: 'Wayne',
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(superHero));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
