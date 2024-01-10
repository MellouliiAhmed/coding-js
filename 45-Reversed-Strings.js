// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//   let result = "";
//   for(let i= str.length -1; i>=0; i--){
//     result+=str[i];
//   }
//   return result;
// }

function solution(str){
    return str.split("").reverse().join("");
}

console.log(solution('world'));