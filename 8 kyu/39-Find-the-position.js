// Find the position!

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// function position(letter){
//     let alphabet= "abcdefghijklmnopqrstuvwxyz";
//     for(let i=0; i<alphabet.length;i++){
//         if(alphabet[i]==letter){
//             return `Position of alphabet: ${i + 1}`;
//         }
//     }
// }

// method 2

function position(letter){
    let alphabet= "abcdefghijklmnopqrstuvwxyz";
    return `Position of alphabet: ${alphabet.indexOf(letter)+1}`;
}
console.log(position("a"));