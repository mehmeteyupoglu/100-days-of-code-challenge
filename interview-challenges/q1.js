// Question 1
// 1.	Given an array of integers, find the sum of its elements. 
// For example, if the array arr = [1,2,3] then 1 + 2 + 3 = 6, so return 6.

// Solution 1-a
const sum = (arr) => {
    let num = 0, i; 
    
    for (i = 0; i < arr.length; i++) {
        num += arr[i]
    }
    return num
}

let a = [1,2,3,4,5]
console.log(sum(a))

// Solution 1-b

const sum2 = (arr) => {
    return arr.reduce((acc, cur) => acc + cur)
}
console.log(sum2(a)) 

// Author's Note: Both of the solutions yield the expected result.