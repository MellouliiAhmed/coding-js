// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

// Description:
// Remove n exclamation marks in the sentence from left to right. n is positive integer.

// Examples
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"


function remove(s,n){
    let s1 =s.split('');
    for(let i=0; i<s1.length; i++){
        if(n==0) break;
        if(s1[i]=='!') {
            s1[i] = '';
            n--
        }
    }
    return s1.join(''); 
  }

  console.log(remove("Hi!!!",1));