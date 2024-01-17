// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// function shortcut (string) {
//     let Vowels = ['a','e','i','o','u'];
//     let result =[];
//     for(let i=0; i< string.length;i++){
//         if(!Vowels.includes(string[i])){
//             result.push(string[i]);
//         }
//     }
//     return result.join('');
//   }

// method 2

function shortcut (string) {
    return string.replace(/[aeiou]/g,"");
}

console.log(shortcut('how are you today?'))