// Reverse a Number

// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

function reverseNumber(n) {
    let list = n.toString().split('');
   while(list[list.length-1]=='0'){
    list.pop()
   }
   
   return list[0] == '-' ? -Number(list.slice(1).reverse().join('')) :  Number((list.reverse()).join(''));
}



  console.log(reverseNumber(-1200000));


//   list[0] == '-' ? list[0] + list.slice(1) 