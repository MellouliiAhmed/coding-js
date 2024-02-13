// Smoking Timmy

// Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

// It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

// a bar has 10 boxes of cigarettes,
// a box has 18 cigarettes,
// out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
// of course the self made cigarettes also have an end which can be used to create a new one...
// Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.




function startSmoking(bars,boxes){
    let initialNumOfBoxes = bars*10 + boxes;
    let initialNumOfCigarettes  = initialNumOfBoxes*18;
    let numOfSmokedCigarettes = 0
    let stubs=0;
    while(initialNumOfCigarettes>0){
        if(stubs==5){
            initialNumOfCigarettes++
            stubs=0;
        }
        stubs++
        initialNumOfCigarettes--
        numOfSmokedCigarettes++
    }
    return numOfSmokedCigarettes;
  }

  console.log(startSmoking(0,1))


