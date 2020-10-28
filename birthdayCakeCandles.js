// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles.Count how many candles are tallest.

// Example


// The maximum height candles are  units high.
// There are  of them, so return .

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0
    for(let i = 0; i< candles.length; i++){
        if(candles[i] > tallest){
            tallest = candles[i]
        }
    }
    let tallestArr = candles.filter(item => item === tallest)
    return tallestArr.length
}