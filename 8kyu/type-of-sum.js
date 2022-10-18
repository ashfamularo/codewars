//Return the type of the sum of the two arguments

function typeOfSum(a, b) {
  let sum = a + b;
  if (sum === sum.toString()) {
    return 'string';
  } else {
    return 'number'
  }
}