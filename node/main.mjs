//type1&2
// import add from './math-esm.mjs';

// console.log(add(5, 5));

//type3
// import math from './math-esm.mjs';

// console.log(math.add(5, 5));
// console.log(math.subtract(5, 5));

//type3 but destructuring the module

// import math from './math-esm.mjs';

// const { add, subtract } = math;

// console.log(add(5, 5));
// console.log(subtract(5, 5));

//type4

// import * as math from './math-esm.mjs';

// const { add, subtract } = math;

// console.log(add(5, 5));
// console.log(subtract(5, 5));

//type4 2nd type

import { add, subtract } from './math-esm.mjs';

console.log(add(5, 5));
console.log(subtract(5, 5));

//refer tut-16
