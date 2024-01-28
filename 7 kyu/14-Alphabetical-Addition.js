// Alphabetical Addition

// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'


// This task seems to involve adding up the numerical values of the letters in the alphabet and then converting the result back into a letter. The letters are assigned numerical values based on their position in the alphabet, with 'a' being 1, 'b' being 2, and so on, up to 'z' being 26. When the sum exceeds 26, it wraps around to the beginning of the alphabet.

// For example, in the 'addLetters('a', 'b', 'c')' case, 'a' has a numerical value of 1, 'b' has a numerical value of 2, and 'c' has a numerical value of 3. Adding them together gives 1 + 2 + 3 = 6. Since 'f' is the sixth letter of the alphabet, the function returns 'f'.

// If no letters are given, the function should return 'z'.


function addLetters(...letters) {
    let lettresValue = {
        'a' : 1,
        'b' : 2,
        'c' : 3,
        'd' : 4,
        'e' : 5,
        'f' : 6,
        'g' : 7,
        'h' : 8,
        'i' : 9,
        'j' : 10,
        'k' : 11,
        'l' : 12,
        'm' : 13,
        'n' : 14,
        'o' : 15,
        'p' : 16,
        'q' : 17,
        'r' : 18,
        's' : 19,
        't' : 20,
        'u' : 21,
        'v' : 22,
        'w' : 23,
        'x' : 24,
        'y' : 25,
        'z' : 26
    }
    let s=0;
    for(let l of letters){
        if(l.length ===0) return 'z'
        for(let inner of l){
            s+=lettresValue[inner];
        }
    }
    while(s>26){
        s=s-26;
    }
    return  s==0? 'z' : Object.keys(lettresValue).find(key => lettresValue[key] === s);
  }

  console.log(addLetters(["v", "g", "x", "j"]));
  


  30-26