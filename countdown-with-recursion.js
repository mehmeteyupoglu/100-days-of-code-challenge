// Only change code below this line
function countdown(n) {
    if (n < 1) {
      return []
    } else {
      const countArray = countdown(n - 1)
      countArray.unshift(n)
      return countArray
    }
  
  
  }
  // Only change code above this line
  
  console.log(countdown(5))
  
  // countdown(5) => return [5, 4, 3, 2, 1] 
  //                    return countdown(4) [4, 3, 2, 1]
  //                         return countdown(3) [3, 2, 1]
  //                                return countdown(2) [2, 1]
  //                                       return countdown(1) [1]
  //                                              return countdown(0) []