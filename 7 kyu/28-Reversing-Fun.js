// Reversing Fun

// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

// Input:
// A string of length 1 - 1000

// Output:
// A correctly reordered string.





function flipNumber(n){
  let list=[]
  let result=[]
  list.push(n[n.length-1]);
  c=n.split('').reverse();
  while(list.length!=n.length){
    list.push(c[c.length-1])
    result= c.slice(1)
    c=c.slice(1).reverse()
  }
  return list.join('')
}

//////method 2///

// function flipNumber (string) {
//   let out = [];
//   let chars = string.split("");
  
//   while (chars.length) {
//   	out.push(chars.reverse().shift());
//   }
  
//   return out.join("");
// }



console.log(flipNumber("012345"))



