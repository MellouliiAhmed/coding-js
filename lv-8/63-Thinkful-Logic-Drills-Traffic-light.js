// Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// function updateLight(current) {
//     let ligths = ['green','yellow','red'];
//     if(ligths.indexOf(current)===2){
//         return 'green';
//     }
//     else{
//         return ligths[ligths.indexOf(current)+1];
//     }
// }  

function updateLight(current){
    return current == 'yellow' ? 'red' : current ='green' ? 'yellow' : 'green';
}