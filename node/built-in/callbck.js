function greet(name) {
  console.log(`hello ${name}`);
}

function greetPavan(aFunction) {
  const name = 'Pavan';
  aFunction(name);
}

greetPavan(greet);

//greetPavan is higherOrderFunction and greet is a callback function
