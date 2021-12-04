/*

https://www.codewars.com/kata/515de9ae9dcfc28eb6000001


Complete the solution so that it splits the string into pairs of 
two characters. If the string contains an odd number of characters 
then it should replace the missing second character of the final pair 
with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']




Original Solve Date: 12/1/2021
*/

function solution(str){
    if (str.length % 2 !== 0){
      str += '_';
    } else {
      //even length string nothing to add
    }
    
    let pairs = [];
    
    for(let i = 0; i < str.length; i += 2){
      let newPair = "";
      newPair += str[i];
      newPair += str[i + 1];
      pairs.push(newPair);
    }
    return pairs; 
}

// Sample Data

// Should return ['ab', 'c_']
console.log(solution('abc'));

// Should return ['ab', 'cd', 'ef']
console.log(solution('abcdef'));