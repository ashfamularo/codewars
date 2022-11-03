// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


function fakeBin(x){
  let numbers = x.split('').map( num => Number(num))
  let binary = numbers.map(num => num < 5 ? 0 : 1).join('')
  return binary.toString()
  }