// Count of positives / sum of negatives
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.



// function countPositivesSumNegatives(input) {
//     let arrayOfPositives = [];
//     let sumOfNegatives = 0;
//     if (input ===null || input.length == 0) return [];
//     for(let i=0;i<input.length;i++){
//         if(input[i]>0){
//             arrayOfPositives.push(input[i]);
//         }
//         else if(input[i]<0){
//             sumOfNegatives+=input[i];
//         }
//     }
//     return [arrayOfPositives.length,sumOfNegatives];
//   }

//method 2
function countPositivesSumNegatives(input) {
    if (input ===null || input.length == 0) return [];
    let arrayOfPositives = input.filter((x)=>x>0).length;
    let sumOfNegatives = input.filter((x)=>x<0).reduce((acc,current) => acc + current, 0);
    return [arrayOfPositives,sumOfNegatives];
}



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));



//push is a method in JavaScript used to add one or more elements to the end of an array and returns the new length of the array.