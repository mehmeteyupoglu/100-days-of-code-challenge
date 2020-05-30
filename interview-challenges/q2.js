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
    let pairNum = 0, i, j; 
    if (size <= 100 && size >= 0) {
        for (i = 0; i < arr.length; i++) {
            if ( arr[i] <= 100 && arr[i]>= 0 ){
                for (j = i+1; j < arr.length; i++){
                    if (arr[i] === arr[j]){
                        pairNum += 1; 
                        arr.splice(i, 1)
                        arr.splice(j, 1)
                    }
                }
            } else {
                return "Invalid parameters"
            } 
        }
        return pairNum
    }  else {
        return "Invalid parameters"
    }
    
}

console.log(funcPair(9,  [10, 20, 20, 10, 10, 30, 50, 10, 20]))

