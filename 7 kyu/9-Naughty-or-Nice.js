// Naughty or Nice?

// In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

// If there is an equal amount of bad and good actions, return 'naughty'

// Examples:

// bad_actions = ['broke someone\'s window', 'fought over a toaster', 'killed a bug']
// whatListAmIOn(bad_actions)
// #-> 'naughty'
// good_actions = ['got someone a new car', 'saved a man from drowning', 'never got into a fight']
// what_list_am_i_on(good_actions)
// #-> 'nice'
// actions = ['broke a vending machine', 'never got into a fight', 'tied someone\'s shoes']
// what_list_am_i_on(actions)
// #-> 'naughty'

function whatListAmIOn(actions){
    let list = actions.map((m) =>m[0]);
    let naughty = 0;
    let nice = 0;
    for(let i=0;i<list.length;i++){
        if(list[i] == 'b' || list[i] == 'f' || list[i] == 'k'){
            naughty++
        }else if(list[i] == 'g' || list[i] == 's' || list[i] == 'n'){
            nice++
        }
    }
    return naughty>=nice? 'naughty' : 'nice';
}

console.log(whatListAmIOn(["never got into a fight", "fought over a toaster", "new kata submitted", "finished a kata cheating", "saved a man from drowning", "kata solved without thanking the author/translator", "tied someones shoes", "answered an issue on CW repo", "never got into a fight", "solved a kata and helped other users", "fought over a toaster"]))