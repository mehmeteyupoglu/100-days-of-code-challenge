// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems.
// The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example

// There are  elements, two positive, two negative and one zero.
// Their ratios are, and.
// Results are printed as:

// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let plus = 0, minus = 0, zero = 0, a, b, c;  

    arr.forEach(item => {
        item < 0 ? minus++
        : item > 0 ? plus++
        : zero++
    })

    a = plus/arr.length
    b = minus/arr.length
    c = zero/arr.length
    
    let d = [a,b,c]

    d.map(item => console.log(item.toFixed(6)))
}