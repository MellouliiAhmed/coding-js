// Outrun your past self

// You are running a race on a circular race track against the ghost of your past self.

// Each time you lap your ghost, you get a confidence boost because you realize how much faster you got.

// Given your speed (km/h), your ghosts speed (km/h), the length of the circular race track (km) and the time you run (h), predict how often you will lap your ghost.

// Lapping your ghost means going from being behind your ghost to being in front of your ghost.


function number_lappings(my_speed, ghost_speed, time, round_length) {
    let myLaps = (my_speed * time) / round_length;
    let ghostLaps = (ghost_speed * time) / round_length;
    if (my_speed > ghost_speed) {
        let myFractionalLap = (my_speed * time) % round_length;
        let ghostFractionalLap = (ghost_speed * time) % round_length;
        if (myFractionalLap > ghostFractionalLap) {
            return Math.floor(myLaps) - Math.floor(ghostLaps);
        } else {
            return Math.floor(myLaps) - Math.floor(ghostLaps) - 1;
        }
    } else {
        return 0;
    }
}



  console.log(number_lappings(14,6,2.5,10))