const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    const name = 'Pavan';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let html = fs.readFileSync('./node/nodeTwo/index.html', 'utf-8');
    html = html.replace('{{name}}', name);
    res.end(html);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
