const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('order-pizza', (size, topping) => {
  console.log(
    `Order received and baking a pizza of ${size} size and ${topping} toppings`
  );
});

emitter.on('order-pizza', (size) => {
  if (size === 'large') {
    console.log(`serving complimentory drink`);
  }
});

console.log('Do work before events occur in the system');
emitter.emit('order-pizza', 'large', 'jalapeno');
