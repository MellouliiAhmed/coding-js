// Likes Vs Dislikes

// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing



// Like, Dislike, Nothing come from Preloaded




function likeOrDislike(buttons) {
    if(buttons.length==0) return 'Nothing'
    let status = buttons[0];
    let i =1;
    while(i<buttons.length){
        if(status === buttons[i]){
            status = 'Nothing';
        }
        else{
            status = buttons[i];
        }
        i++
    }
    return status
}







  console.log(likeOrDislike(["Like","Dislike","Dislike"]));