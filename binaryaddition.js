// Binary Addition
// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.

function addBinary(a,b) {

    let sum = a + b;  
    let result = parseInt(sum, 10).toString(2); 
    return result; 

}
let result = addBinary(5,20)

console.log(typeof result, result); 
