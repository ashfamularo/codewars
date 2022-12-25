// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

//     If the average length is not an integer, use Math.round().
//     The input array's length > 1



function averageLength(arr) { 
  let count = Math.round(arr.reduce((a, b) => a + b.length, 0) / arr.length)
  return arr.map(el => el[0].repeat(count))
}


// The averageLength function takes in an array called arr as an argument. It then defines a variable called count which is equal to the average length of the elements in arr, rounded to the nearest whole number. To do this, the function uses the reduce method to sum up the lengths of all the elements in arr, and then divides the result by the number of elements in arr. The Math.round function is used to round this result to the nearest whole number.

// Next, the function returns a new array that is created using the map method. The map method applies the callback function provided as an argument to each element in the array, and returns a new array with the results. In this case, the callback function returns a string consisting of the first character of each element in arr, repeated count times.