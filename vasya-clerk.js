// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
// Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples; 
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
    
    let tFive = 0; 
    let fifty = 0; 
    let hundred = 0; 
    let total = tFive+fifty+hundred; 

    for (let i = 0; i<peopleInLine.length; i++){
        let person = peopleInLine[i]
        console.log(`i is ${i}`)
        if(person === 25){
            tFive += person
            console.log(`tFive is ${tFive}`)
        } 
        
        else if( person === 50) {
            if(tFive > 0){
                fifty += person; 
                tFive -= 25;
                console.log(`fifty is ${fifty}`)
                console.log(`tFive is ${tFive}`)
            } else {
                return "NO";
            }
                      
        } 
        
        else {
            if(tFive > 0 && fifty > 0){
                hundred += person; 
                tFive -= 25; 
                fifty -= 50; 
                console.log(`fifty is ${fifty}`)
                console.log(`tFive is ${tFive}`)
                console.log(`hundred is ${hundred}`)

            } else if(tFive >= 75) {
                hundred += person; 
                tFive -= 75; 
                console.log(`fifty is ${fifty}`)
                console.log(`hundred is ${hundred}`)
            }  else {
                return "NO";
            }
            
        } 
           
    }console.log(`total is ${total}`) 
    return "YES"; 

}

console.log(tickets([25, 25, 50])) // => YES 
console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])) //NO.
