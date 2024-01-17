// Convert a String to a Number!

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// const stringToNumber = function(str){
//     return Number(str);
//   }



  const stringToNumber = function(str){
    return +str;
  }

  console.log(typeof(stringToNumber('124')));


// Number(str); convert string to a number

// +str; convert string to a number

// typeof(stringToNumber('124')) give the type of the element