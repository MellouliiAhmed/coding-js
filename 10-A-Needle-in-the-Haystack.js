// A Needle in the Haystack
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

// function findNeedle(haystack) {
//     for(let i=0;haystack.length;i++){
//         if(haystack[i]==="needle") return "found the needle at position " + i;
//     }
//   }

// method 2

function findNeedle(haystack) {
    return "found the needle at position "+ haystack.indexOf('needle');
}

  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));

  

  // indexOf is a method in JavaScript that returns the index of the first occurrence of a specified value within a string or array.
  