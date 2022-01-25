function jumpingOnClouds(c) {
    // Write your code here

    let i = 0; 
    let numberOfJumps = 0; 

    while(i < c.length){
        numberOfJumps++

        console.log({
            numberOfJumps, 
            i,
            c: c[i]
        })

        if(c[i + 2] == 0){
            i += 2
        } else {
            i++
            
        }
    }

    return numberOfJumps - 1
}

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))
