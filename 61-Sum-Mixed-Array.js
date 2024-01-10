// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x){
//     let newNumbersArray =[];
//     let s=0;
//     for(let i=0; i<x.length;i++){
//         if(typeof(x[i])=='string'){
//             s += Number(x[i]); 
//         }
//         else{
//             s+=x[i];
//         }
//     }
//     return s;
// }

// method 2

function sumMix(x){
    return x.map((m) => Number(m)).reduce((acc,current) => acc+current ,0);
}