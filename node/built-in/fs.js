const { ChildProcess } = require('node:child_process');
const fs = require('node:fs');

console.log('first');
const fileContents = fs.readFileSync('node/built-in/file.txt', 'utf-8');
console.log(fileContents);

console.log('second');
fs.readFile('./node/built-in/file.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
console.log('third');

//writing to file , using writefile method and  synchronous method

fs.writeFileSync('./node/built-in/greet.txt', 'hello world');

//writing to file , using writefile method and  asynchronous method

fs.writeFileSync('./node/built-in/greet2.txt', 'hello world 2', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file written');
  }
});

//appending a text to same file
fs.writeFileSync(
  './node/built-in/greet.txt',
  ' pavan coding here',
  { flag: 'a' },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file written');
    }
  }
);
