// Determine if the poker hand is flush

// Determine if the poker hand is flush, meaning if the five cards are of the same suit.

// Your function will be passed a list/array of 5 strings, each representing a poker card in the format "5H" (5 of hearts), meaning the value of the card followed by the initial of its suit (Hearts, Spades, Diamonds or Clubs). No jokers included.

// Your function should return true if the hand is a flush, false otherwise.

// The possible card values are 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A

// Examples
// ["AS", "3S", "9S", "KS", "4S"]  ==> true

// ["AD", "4S", "7H", "KS", "10S"] ==> false


// function isFlush(cards) {
//     let status = true;
//     for(let i=1; i<cards.length;i++){
//         if(cards[i][-1] != cards[0][-1]) {
//             status = false;
//             break;
//         }  
//     }
//     return status;
// }
function isFlush(cards) {
    let status = true;
    console.log(cards[0][cards[0].length-1])
    for(let i=1; i<cards.length;i++){
        if(cards[i][cards[i].length-1] != cards[0][cards[0].length-1]) {
            status = false;
            break;
        }  
    }
    return status;
}

console.log(isFlush([  "AD", "4S", "10H", "KC", "5S" ]))

  
