// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2)
// {
//   if(operation=="+") return value1+value2;
//   if(operation=="-") return value1-value2;
//   if(operation=="*") return value1*value2;
//   if(operation=="/") return value1/value2;
// }

// method 2
function basicOp(operation, value1, value2)
{
  return eval(value1+ operation+ value2);
}

// eval is a function in JavaScript that takes a string argument, interprets it as JavaScript code,
// and executes it within the current execution scope. For instance, if you pass a string that contains a valid
// JavaScript expression,
// eval will evaluate that expression and return the result.


console.log(basicOp("*", 6, 8));


// nice method 
// function basicOp(operation, value1, value2)
// {
//   var cases = {
//     '+': value1 + value2,
//     '-': value1 - value2,
//     '*': value1 * value2,
//     '/': value1 / value2
//   };
//   return cases[operation]
// }