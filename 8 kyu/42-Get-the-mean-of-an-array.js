// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//     let sum = 0;
//     for(let i=0;i<marks.length;i++){
//         sum+=marks[i];
//     }
//     return Math.floor(sum/marks.length);
//   }

// method 2
function getAverage(marks){
    return Math.floor(marks.reduce((acc, current) => acc+ current, 0)/marks.length)
}



console.log(getAverage([1,2,3,4,5,]));