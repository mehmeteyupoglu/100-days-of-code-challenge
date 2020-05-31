// 2.	In a given array find the same matches. 
// For example, lets have an array of size 7, [1,2,1,2,1,3,2], this array has 1 pair of 1 and 1 pair of 2. Number of pair is 2.
// Write a function which takes two parameter;

// n: the number of size of arr,
// arr: integer n number

// Constraints:

// •	1 <= n <= 100
// •	1 <= arr[i] <= 100 where 0 <= i < n
// Return the total number of matching number pairs of arr list.
// Sample Input: 
// •	matches( 9,  [10, 20, 20, 10, 10, 30, 50, 10, 20] ) will return 3
// •	matches( 10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3] ) will return 4

const funcPair = (size, arr) => {

    //The given array is sorted and it makes things easy to handle
    let newArr = arr.sort(), i; score = 0

    //The first constraint is controlled with this conditional 
    if (size >= 100 && size <= 0) {
        return "Invalid parameter!"
    }

    //The second constraint is controlled with this binary operator (ES6)
    arr.filter(item => {
        return item >= 100 || item <= 0
    }) && "Invalid parameter!"

    //If it passes the constraints, the array is able to go through the loop.
    for (i = 0; i<size; i){

        //If the item equals to the next one, i increases by two to prevent the collusion
        if (newArr[i] === newArr[i+1]){
            score += 1
            i += 2
        } else {
            i++
        }
    }
    return score    
}

console.log(funcPair(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
console.log(funcPair(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]))

