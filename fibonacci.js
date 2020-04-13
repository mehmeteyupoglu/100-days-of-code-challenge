//Fibonacci generator. 
// This function generates n number of fibonacci numbers. 

let fibGen = (num) => {
    
    let fibArr = []; 
    let a = 0, b = 1, f = 1; 

    for (let i = 0; i <= num; i++){
        if(num >= 0) {
            fibArr.push(a)
            f = a+b; 
            a = b; 
            b = f; 
        } else {
            console.log("Please enter a positive number!");
        }
    } return fibArr; 
}
let result = fibGen(8); 
console.log(result); 

let result1 = fibGen(0); 
console.log(result1);

let result2 = fibGen(-3); 
console.log(result2); 

