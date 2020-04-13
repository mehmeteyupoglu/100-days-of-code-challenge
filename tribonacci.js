//Tribonacci function generates n number of tribonacci series. 


let tribonacci = (num) => {

    let tribArr = []; 
    let a = 0, b = 1, c = 1, f = 2; 

    for (let i = 0; i < num; i ++){
        if (num >= 0 ) {
            tribArr.push(a); 
            f = a + b + c; 
            a = b; 
            b = c; 
            c = f; 
        } else {
            console.log('Please enter a positive number!'); 
        }
    }return tribArr; 
}

let try1 = tribonacci(8); 
console.log(try1); 