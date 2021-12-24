function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) { // base case
        return [startNum]
    }

    let numbers = rangeOfNumbers(startNum, endNum - 1)
    numbers.push(endNum)
    return numbers;
};

console.log(rangeOfNumbers(1, 5))

// rangeOfNumbers(1, 5) => [1, 2, 3, 4, 5]
// rangeOfNumbers(1, 5) => rangeOfNumbers(1, 4) => [1, 2, 3, 4]
// rangeOfNumbers(1, 5) => rangeOfNumbers(1, 4) => rangeOfNumbers(1, 3) => [1, 2, 3]
// rangeOfNumbers(1, 5) => rangeOfNumbers(1, 4) => rangeOfNumbers(1, 3) => rangeOfNumbers(1, 2) => [1, 2]
// rangeOfNumbers(1, 5) => rangeOfNumbers(1, 4) => rangeOfNumbers(1, 3) => rangeOfNumbers(1, 2) => rangeOfNumbers(1, 1) => [1] 