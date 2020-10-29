// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

function diagonalDifference(arr) {
    // Write your code here

    let first = 0
    arr.forEach((item, index) => first += item[index] )

    let second = 0
    arr.forEach((item, index) => second += item[(item.length-1)-index])

    let result = first - second
    return Math.abs(result)
}