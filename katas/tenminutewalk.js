/*

https://www.codewars.com/kata/54da539698b8a2ad76000228

You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the 
opportunity to go for a short walk. The city provides its citizens with a Walk 
Generating App on their phones -- everytime you press the button it sends you an 
array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it 
takes you one minute to traverse one city block, so create a function that will 
return true if the walk the app gives you will take you exactly ten minutes (you 
don't want to be early or late!) and will, of course, return you to your starting 
point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of 
direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty 
array (that's not a walk, that's standing still!

Original Solve Date - 12/1/2021

*/



function isValidWalk(walk) {
    //insert brilliant code here
    let numN = 0;
    let numS = 0;
    let numE = 0;
    let numW = 0;

    if(walk.length == 10){
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i].toLowerCase()){
                case 'n':
                    numN ++;
                    break;
                case 's':
                    numS ++;
                    break;
                case 'e':
                    numE ++;
                    break;
                case 'w':
                    numW ++;
                    break;
                default:
                    //not a valid direction
                    break;
            }
        }
  
        if (numN == numS && numW == numE) {
            return true;
        } else {
            return false;
        }
    } else {
        //number of steps will make us arrive to early or to late
        return false;
    }
}

// Sample Data Sets
 
// Should return true
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

// Should return false  
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));

// Should return false
console.log(isValidWalk(['w']));

//Should return false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));