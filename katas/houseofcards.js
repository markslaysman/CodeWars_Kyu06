/*

https://www.codewars.com/kata/543abbc35f0461d28f000c11


You want to build a standard house of cards, but you don't know how 
many cards you will need. Write a program which will count the minimal 
number of cards according to the number of floors you want to have. 
For example, if you want a one floor house, you will need 7 of them 
(two pairs of two cards on the base floor, one horizontal card and one 
pair to get the first floor). Here you can see which kind of house of 
cards I mean: http://www.wikihow.com/Build-a-Tower-of-Cards

Note about floors:
This kata uses the British numbering system for building floors. If 
you want your house of cards to have a first floor, it needs a ground 
floor and then a first floor above that.

Details (Ruby & JavaScript & Python & R)
The input must be an integer greater than 0, for other input raise 
an error.

Details (Haskell)
The input must be an integer greater than 0, for other input return 
Nothing.

Details (COBOL)
The input will be an integer. If it is inferior or equal to 0, return -1.




Original Solve Date: 12/1/2021
*/

function houseExtension(floors){
    return (floors + ((floors * 2) +2))
}
  
function houseOfCards(floors){
    //good luck!
    if (floors < 1 || !(Number.isInteger(floors))){
      throw new Error();
    } else if (floors === 1) {
        return 7;
    } else {
        let neededCards = 0;
      
        for (let i = floors; i > 1; i--){
            neededCards += houseExtension(i);
        }
     
    neededCards += 7;
    return neededCards;
    }
}

// Sample Data

// Should return 7
console.log(houseOfCards(1));

// Should return 26
console.log(houseOfCards(3));