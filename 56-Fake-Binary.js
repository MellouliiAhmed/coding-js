// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x){
//     return x.split("").map((m) => m < '5' ? '0' : '1').join('');
// }

// method 2

function fakeBin(x){
    return x.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1');
}

console.log(fakeBin('123456789'));