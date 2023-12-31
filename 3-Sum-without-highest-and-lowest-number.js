// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.



//this method is wrong because we didn't take in consideration that the max and the min could be repeated for exemple [ 1,6, 2, 1, 8, 10,15,15 ] for this case the function will remove all '15' and all '1' which is wrong

// function sumArray(array) {
//     if (array==null) return 0;
//     let maxValue = Math.max(...array);
//     let minValue = Math.min(...array);
//     let filtredArray = array.filter((x)=> x!==maxValue && x!== minValue)
//     let sum = filtredArray.reduce((acc,current)=>acc+current, 0);
//     return sum;
// }


// method 2 

// function sumArray(array){
//     if (array==null) return 0;
//     return array
//     .filter((x)=>x!==Math.max(...array)&& x!==Math.min(...array))
//     .reduce((acc,current)=>acc+current ,0);
// }

function sumArray(array){
    if (array==null) return 0; 
    return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,current)=> acc+current ,0);
}




console.log(sumArray([ 6, 2, 1, 8, 10,15 ]))

//(acc,current)=>acc+current => this is a callBack function

//sort((a,b)=>a-b)=> This is an array sorting method using a comparator function (a, b) => a - b to sort elements numerically in ascending order.
//.slice(1,-1)=> create a new array without the first element and the last element