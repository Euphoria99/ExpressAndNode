const fs = require('node:fs');

const readableStream = fs.createReadStream('./node/built-in/file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream('./node/built-in/file2.txt');

readableStream.on('data', (chunk) => {
  console.log(chunk);
  writeableStream.write(chunk);
});
