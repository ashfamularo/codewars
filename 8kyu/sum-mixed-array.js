// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
  let numArr = []
  for (let i = 0; i < x.length; i++){
      numArr.push(Number(x[i]))
  }
  return numArr.reduce((a,b) => a + b, 0)
}