// To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// function squareOrSquareRoot(array) {
//     let newArray = [];
//     for(let i=0;i<array.length;i++){
//         if(Number.isInteger(Math.sqrt(array[i]))){
//             newArray.push(Math.sqrt(array[i]));
//         }
//         else{
//             newArray.push(array[i]*array[i])
//         }
//     }
//     return newArray;  
//   }

// method 2

function squareOrSquareRoot(array){
    return array.map((number) => Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number*number);
}


  console.log(squareOrSquareRoot([4,3,9,7,2,1]));



//   Number.isInteger(...): Checks if the result of Math.sqrt(number) is an integer. the return is Boolean
//   Math.sqrt(number): Calculates the square root of the number.