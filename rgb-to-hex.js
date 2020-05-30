// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

function insideFunc(a) {
    var hex = a.toString(16)
    console.log(hex)
    return hex.length == 1 ? "0" + hex : hex
}

function rgb(r, g, b){
    let hex = insideFunc(r) + insideFunc(g) + insideFunc(b)
    return hex.toUpperCase()
  }

console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3
