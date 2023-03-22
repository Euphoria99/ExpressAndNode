// const math = require('./math');

// const { add, subtract } = math;

// console.log(add(2, 3));
// console.log(subtract(2, 3));

//extending event emitter
const PizzaShop = require('./built-in/pizza-shop');
const DrinkMachine = require('./built-in/drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, topping) => {
  console.log(
    `Order received and baking a pizza of ${size} size and ${topping} toppings`
  );
  drinkMachine.serverDrink(size);
});
pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();
