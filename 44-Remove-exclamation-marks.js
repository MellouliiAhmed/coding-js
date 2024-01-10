// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(s) {
//     return s.replace(/[!]/g,"");
//   }

// method 2

function removeExclamationMarks(s){
    return s.split("").filter((e) => e !="!").join("");
}

console.log(removeExclamationMarks("Hello World!"));