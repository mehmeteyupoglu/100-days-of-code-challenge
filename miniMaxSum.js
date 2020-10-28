// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints


function miniMaxSum(arr) {

    let reducer = (acc, val) => acc + val, min, max; 

    let newArr = arr.sort((a,b) => a-b)

    let totalNum = newArr.reduce(reducer, 0)

    min = totalNum - newArr[4]
    max = totalNum - newArr[0]
    console.log(min, max)
    
}