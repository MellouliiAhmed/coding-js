// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    return n.toString()
    .split("")
    .map((m)=>Number(m))
    .reverse();
  }


console.log(digitize(1234567899));

//n.toString(): Converts the number n to a string.
//.split(""): Splits the string into an array of individual characters.
//.map((m)=>Number(m)): Converts each character back to a number.
//.reverse(): Reverses the order of elements in the array.
