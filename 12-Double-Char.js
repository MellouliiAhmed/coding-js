// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.


function doubleChar(str) {
    return str.split("").map((s)=>s.repeat(2)).join("");
  }

  console.log(doubleChar("ahmed"));


  
// str.split(""): Splits a string str into an array of individual characters.
// .map((s) => s.repeat(2)): Applies a function to each element in the array, repeating each character s twice.
// .join(""): Joins the elements of the array back into a single string with no separator.