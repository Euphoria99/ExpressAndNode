const fs = require('fs');

//exp1
// fs.readFile(__filename, () => {
//   console.log('this is readfile 1');
// });

// process.nextTick(() => console.log('this is process.nextTick 1'));
// Promise.resolve().then(() => console.log('this is Promise.resolve 1'));

//exp2
// setTimeout(() => console.log('this is setTimeout 1'), 0);

// fs.readFile(__filename, () => {
//   console.log('this is readFile1');
// });

//exp3
//microtask queue,timer queue and io queue combined

//i/o call back
fs.readFile(__filename, () => {
  console.log('this is readFile 1');
});

//next tick call back-microtask queue
process.nextTick(() => console.log('this is process.nextTick 1'));
//promise call back-microtask queue
Promise.resolve().then(() => console.log('this is promise.resolve 1'));
//timer call back
setTimeout(() => console.log('this is setTimeout 1'), 0);

for (let i = 0; i < 2000000000; i++) {}

// i/o queue callbacks are executed after microtask queues callbacks and timer queue callbacks
