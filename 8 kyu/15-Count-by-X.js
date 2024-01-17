// Count by X

// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// function countBy(x, n) {
//     let z = [];
//     for(let i=1 ; i<n+1 ; i++){
//         z.push(x*i)
//     }
//     return z;
//   }


//method 2
function countBy(x, n) {
    return Array.from(Array(n+1).keys()).slice(1).map((m) => m*x);
  }

  console.log(countBy(2, 5));


  //Array.from(Array(n+1).keys()): Generates an array containing numbers from 0 to n inclusive using Array.from with keys() method on a created array of length n+1.