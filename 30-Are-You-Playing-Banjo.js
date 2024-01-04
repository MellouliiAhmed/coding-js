// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"


// function areYouPlayingBanjo(name) {
//     if(name.charAt(0) === 'R' || name.charAt(0) === 'r'){
//         return `${name} plays banjo`;
//     }
//     else return `${name} does not play banjo`;
// }

// method 2

// function areYouPlayingBanjo(name) {
//     return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo` ;
// }

// method 3

function areYouPlayingBanjo(name) {
    return (/^r/i).test(name) ? `${name} plays banjo` : `${name} does not play banjo` ;
}





console.log(areYouPlayingBanjo("me"));


//"name.charAt(0)": extracts the first character of the string variable "name".

// (/^r/i).test(name): regular expression checks if the string "name" starts with the letter 'r' (case-insensitive).