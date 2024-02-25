// Parts of a list

// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"
// Note
// You can see other examples for each language in "Your test cases"


function partlist(arr) {
    let result=[];
    let part1=[];
    let part2=[];
    let fusion=[];
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<=i;j++){
            part1.push(arr[j])
        }
        for(let k=i+1;k<arr.length;k++){
            part2.push(arr[k])
        }
        fusion=[part1.join(' '),part2.join(' ')]
        result.push(fusion);
        part1=[]
        part2=[]
        fusion=[]
    }
    return result
}


///////////method 2///////////////////

// function partlist(arr) {
//     var newArray;
//     var returnArray=[];
//     for( var i=1; i<arr.length; i++){
//       newArray = [];
//       newArray.push(arr.slice(0,i).join(" "));
//       newArray.push(arr.slice(i).join(" "));
//       returnArray.push(newArray);
//     }
    
//     return returnArray;
// }


console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))