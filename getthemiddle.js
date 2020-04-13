// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

let getMiddle = (word) => {

    let lenOfWord = Math.round(word.length/2)-1 
    if (word.length%2 === 0){
        return word.slice(lenOfWord, lenOfWord+2)
    } return word[lenOfWord]
}

console.log(getMiddle("sliced")); 
console.log(getMiddle("slice")); 

