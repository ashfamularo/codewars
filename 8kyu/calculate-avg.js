// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {
  if (array.length === 0) {
    return 0;
  } else {
  let sum = array.reduce((prev, curr) => prev + curr, 0);
  let numOfNums = array.length;
  return sum / numOfNums;
  }
}