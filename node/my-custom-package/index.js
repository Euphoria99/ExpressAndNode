const upperCase = require("upper-case").upperCase;


function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to euphoria`))
}

greet("pavan")
module.exports = greet;