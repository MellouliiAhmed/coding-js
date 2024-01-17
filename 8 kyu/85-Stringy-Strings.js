// Stringy Strings

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//     let result ='';
//     for(let i=0; i<size;i++){
//         result += i % 2 === 0 ? '1' : '0';
//     } 
//     return result;
//   }

// method 2

function stringy(size){
    return Array.from({length: size},(_, index) => index % 2 ===0 ? '1' : '0' ).join('');
}



console.log(stringy(5));