// // Odder than the rest - 2

// // Some integral numbers are odd. All are more odd, or less odd, than others.

// // Even numbers satisfy n = 2m ( with m also integral ) and we will ( completely arbitrarily ) think of odd numbers as n = 2m + 1.
// // Now, some odd numbers can be more odd than others: when for some n, m is more odd than for another's. Recursively. :]
// // Even numbers are always less odd than odd numbers, but they also can be more, or less, odd than other even numbers, by the same mechanism.

// // Task
// // Given a non-empty finite list of unique integral ( not necessarily non-negative ) numbers, determine the number that is odder than the rest.
// // Given the constraints, there will always be exactly one such number.

// // Examples
// // oddest([1,2]) => 1
// // oddest([1,3]) => 3
// // oddest([1,5]) => 5
// // Hint
// // Click here.
// // How odd is -1 ?




// function oddest(a) {
//     if(a.length==0) return 0;
//     let list = [];
//     let result = []
//     for(let i=0;i<a.length;i++){
//         if(Math.abs(a[i])%2==1){
//             list.push(a[i]);
            
//         }
//     }
//     result = list.sort((a,b) => a-b);
//     return result[result.length-1]
//     }


//     console.log(oddest([-6,-5,-4,-3,-2,-1,0,1,2,3,4]))
  