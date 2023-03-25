const fs = require('node:fs');

const zlib = require("node:zlib");

const gzip = zlib.createGzip()


const readableStream = fs.createReadStream('./node/built-in/file.txt', {
  encoding: 'utf-8',
  highWaterMark: 2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./node/built-in/file2.txt.gz"))

const writeableStream = fs.createWriteStream('./node/built-in/file2.txt');


readableStream.pipe(writeableStream);

// readableStream.on('data', (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
