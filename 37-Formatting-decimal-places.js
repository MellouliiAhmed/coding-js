// Formatting decimal places #0

// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.


// function twoDecimalPlaces(n) {
//     return Number(n.toFixed(2));
//   }
function twoDecimalPlaces(n) {
    return Math.round(n * 100)/100;
  }

console.log(twoDecimalPlaces(5.5589));


// Rounds the number 'n' to two decimal places and converts it to a numeric value.

// n * 100: Multiplies 'n' by 100, shifting the decimal point two places to the right.
// Math.round(n * 100): Rounds the result of 'n' multiplied by 100 to the nearest integer.
// Math.round(n * 100) / 100: Divides the rounded value by 100, effectively shifting the decimal point back to its original position, resulting in a number rounded to two decimal places.
// The overall effect is that the line of code returns 'n' rounded to two decimal places.

