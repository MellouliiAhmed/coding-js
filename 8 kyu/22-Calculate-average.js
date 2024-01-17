// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function findAverage(array) {
//     if(array === null || array.length===0) return 0;
//     let sum = 0;
//     for(let i = 0; i< array.length;i++){
//         sum+=array[i]
//     }
//     return sum/array.length;
// }

// method 2

function findAverage(array) {
    if(array === null || array.length===0) return 0;
    return array.reduce((acc, current) => acc+current,0)/array.length;
}


console.log(findAverage([1,2,3,4]));