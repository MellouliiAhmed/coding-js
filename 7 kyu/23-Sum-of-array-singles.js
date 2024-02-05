// Sum of array singles

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// If you like this Kata, please try:

// Sum of prime-indexed elements

// Sum of integer combinations


function repeats(arr){
    let newArr = arr.sort((a,b) => a-b).filter((e,i) => e==arr[i+1]);
    return arr.filter((e) => !newArr.includes(e)).reduce((acc,current) => acc+current,0);
};


//method 2
// function repeats(arr){
//     return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
//   };




console.log(repeats([4,5,7,5,4,8]))