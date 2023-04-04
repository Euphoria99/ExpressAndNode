const fs = require('fs');

//exp1
fs.readFile(__filename, () => {
  console.log('this is readFile 1');
  setImmediate(() => console.log('this is setImmediate inside readFile'));
  process.nextTick(() =>
    console.log('this is process.nextTick inside readFile')
  );
  Promise.resolve().then(() =>
    console.log('this is promise.resolve inside readFile')
  );
});
process.nextTick(() => console.log('this is process.nextTick 1'));
Promise.resolve().then(() => console.log('this is promise.resolve 1'));
setTimeout(() => console.log('this is setTimeout 1'), 0);
for (let i = 0; i < 2000000000; i++) {}

//exp2
// setImmediate(() => console.log('this is setImmediate 1'));
// setImmediate(() => {
//   console.log('this is setImmediate 2');
//   process.nextTick(() => console.log('this is process.nextTick 1'));
//   Promise.resolve().then(() => console.log('this is promise.resolve 1'));
// });
// setImmediate(() => console.log('this is setImmediate 3'));

//exp3
// setTimeout(() => console.log('this is setTimeout 1'), 0);
// setImmediate(() => console.log('this is setImmediate 1'));

// for (let i = 0; i < 2000000000; i++) {} //we add this time consuming for loop to guarantee the order
