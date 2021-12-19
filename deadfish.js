// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// Return the output array, and ignore all non-op characters
function parse(data) {
    let result = 0;
    let outputArr = []

    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case 'i':
                result = result + 1;
                break;
            case 'd':
                result = result - 1;
                break;
            case 's':
                result = result * result;
                break;
            case 'o':
                outputArr.push(result)
                break;
            default:
                result
        }
    }

    return outputArr
}
