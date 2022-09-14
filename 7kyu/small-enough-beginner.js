// Description:

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
// Fundamentals
// Arrays

function smallEnough(a, limit){
  let answer = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= limit) {
      answer = true;
    }
    else {
      answer = false;
      break;
    }
  }
  return answer;
}