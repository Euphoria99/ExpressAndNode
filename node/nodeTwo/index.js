const fs = require('node:fs');

console.log('First');

fs.readFile('./node/nodeTwo/file.txt', 'utf-8', (err, data) => {
  console.log('file contents');
});

console.log('last');
