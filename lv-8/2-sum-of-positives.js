/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

// function positiveSum(arr) {
//   let initValue=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         initValue+=arr[i];
//     }
//   }
//   return initValue;
// }

//method 2
function positiveSum(arr){
    return arr.filter((x)=> x > 0)
    .reduce((acc, current) => acc+current, 0);
}



console.log(positiveSum([1,-4,7,12]));



//arr.filter((x)=> x > 0) => this will return a list of positives elements => [1,7,12] 

//.reduce((acc, current) => acc+current, 0)=> acc: is the number in the array that I will start with for this exemple 0 , current is the current number
