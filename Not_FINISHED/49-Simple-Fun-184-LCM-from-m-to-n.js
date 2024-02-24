// Simple Fun #184: LCM from m to n

// Task
// Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).

// Example
// For m = 1, n = 2, the output should be 2.

// For m = 2, n = 3, the output should be 6.

// For m = 3, n = 2, the output should be 6 too.

// For m = 1, n = 10, the output should be 2520.

// Input/Output
// [input] integer m
// 1 ≤ m ≤ 25

// [input] integer n
// 1 ≤ n ≤ 25

// [output] an integer



function mnLCM(m,n) {
    let result=;
    let etat=false;
    while(etat==false){
        etat=divided(result,m,n)
    }
  }
  function divided(result,m,n){
    let min=0
    let max=0
    if(m-n>0){
        min = n
        max = m
    } 
    else{
        min=m
        max=n
    }
    let divided =true;
    let i=min;
    while(i<=max && divided==true){
        if(result%i !=0){
            divided = false;
        }
        i++
    }
    return divided
    
  }

console.log(mnLCM(6,3,2))