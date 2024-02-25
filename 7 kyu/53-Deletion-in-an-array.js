// Deletion in an array

// The deleteValues function takes an array and removes elements that answer true to the pred function.

// For some reason, some of the elements of the array for which the predicate holds are not deleted...

// Can you fix the code?

// function pred(n) {
//     return n % 2 === 0;
//   }

  function deleteValues(array, pred) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (pred(array[i])) {
        array.splice(i, 1);
      }
    }
    return array;
  }

  

  ///By iterating in reverse order, we ensure that removing elements doesn't affect the indices of elements we haven't yet examined.
  console.log(deleteValues([ 3, 2, 4, 7, 6, 8, 10 ]))