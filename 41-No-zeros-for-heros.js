// No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

function noBoringZeros(n) {
    let string =n.toString();
    while(string.endsWith(0)){
        string =string.slice(0, string.length -1);
    }
    return Number(string); 
  }

console.log(noBoringZeros(960000));


// string.endsWith(0): The code snippet checks if a string ends with the character '0'.