// Excel sheet column numbers

// Write a function

// titleToNumber(title) or title_to_number(title) or titleToNb title ...

// (depending on the language)

// that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

// Examples:

// titleTonumber('A') === 1
// titleTonumber('Z') === 26
// titleTonumber('AA') === 27
// Note for Clojure:
// Don't use Java Math/pow (even with bigint) because there is a loss of precision 
// when the length of "title" is growing. 
// Write your own function "exp [x n]".


function titleToNumber(title) {
    let lettresValue = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26
    }
    let result=0
    for(let i=0;i<title.length;i++){
        result+=lettresValue[title[i].toLowerCase()]*Math.pow(26,title.length-1-i);
    }
    return result;
}


console.log(titleToNumber('CODEWARS'));