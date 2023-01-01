// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/**
 /* @param {number} num
 /* @return {number}
 */

var numberOfSteps = function(num) {
  let answer = num; 
  let count = 0;
  while (answer > 0){
      if (answer % 2 === 0){
          answer = answer / 2;
          count++
      } else {
          answer = answer - 1
          count++
      }
  }
  return count;
};