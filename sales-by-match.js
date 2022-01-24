// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example


// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where 
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3


function sockMerchant(n, ar) {
    // Write your code here
    let pairedNumber = 0
    let pairs = 0
    let numbersVisited = []

    for (let i = 0; i < n; i++) {

        pairedNumber += 1
        let restOfAr = ar.slice(i + 1)

        if (!numbersVisited.includes(ar[i])) {
            for (let j = 0; j < restOfAr.length; j++) {
                if (ar[i] == restOfAr[j]) {
                    console.log('bingo', ar[i])
                    pairedNumber += 1
                }

            }

        }

        numbersVisited.push(ar[i])
        pairs += Math.floor(pairedNumber / 2)
        pairedNumber = 0

    }

    return pairs
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))