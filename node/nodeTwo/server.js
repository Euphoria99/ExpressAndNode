const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('./node/nodeTwo/index.html').pipe(res);
  //   const html = fs.readFileSync('./node/nodeTwo/index.html', 'utf-8');
  //   res.end(html);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
