//exp1

// console.log('console.log 1');
// process.nextTick(() => console.log('this is process.nextTick 1'));
// console.log('console.log 2');

//exp2
// Promise.resolve().then(() => console.log('this is promise.resolve 1'));
// process.nextTick(() => console.log('this is  process.nextTick 1'));

//exp3
process.nextTick(() => console.log('this is process.nextTick 1')); //1
process.nextTick(() => {
  console.log('this is process.nextTick 2'); //2
  process.nextTick(
    () => console.log('this is the inner next tick inside next tick') //4
  );
});
process.nextTick(() => console.log('this is process.nextTick 3')); //3

Promise.resolve().then(() => console.log('this is Promise.resolve 1')); //1
Promise.resolve().then(() => {
  console.log('this is Promise. resolve 2'); //2

  process.nextTick(
    () => console.log('this is the inner next tick inside Promise then block') //4
  );
});
Promise.resolve().then(() => console.log('this is Promise.resolve 3')); //3
