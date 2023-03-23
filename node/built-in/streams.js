const buffer = new Buffer.from('Pavan');

buffer.write('code'); //buffers have limited memory
console.log(buffer.toString());
console.log(buffer); //buffer contains raw binary data that is displayed as output when we log to console..however it prints hexadecimal or base 16 notation of the number as printing 8 bits binary for every character can flood the terminal
console.log(buffer.toJSON());

//ref tut-24
