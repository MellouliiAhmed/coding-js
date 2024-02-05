// Set Reducer

// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2+ in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element
// Visual example
// Example of the flow of the algorithm



////////////////// picture in resume///////////////////

///////////////////////not compleeeeteeedd////////////////////////


function setReducer(input) {
    let result = [];
    let count = 0;
    let j=0;
    let first = input[0];
    while(input !=[]){
        for(let i=0;i<input.length;i++){
            if(input[i]==first) {
                count++;
                j++
            }  
        }
        result.push(count)
        count=0;
        input=input.slice(0,j)
    }
    return result;
  }

  console.log(setReducer([6,6,6,6]));