// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
    let L= s.split(' ');
    let min = L[0]
    for(let i=1;i<L.length;i++){
        if(L[i].length<min.length){
            min=L[i]
        }
    }
    return min.length
}


/////method2////////

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));