// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

function solve(arr) {
  return arr
  // The .map() method is called on arr, which creates a new array by calling the provided function on each element in the input array. In this case, the provided function is a => new Set(a).size. This function creates a new Set object from the array a, and then returns the size of the set (the number of unique elements in the set).
    .map(a => new Set(a).size)
  //The .reduce() method is then called on the array returned by .map(), which applies a function to each element in the array (left to right), resulting in a single output value. In this case, the provided function is (n,a) => a * n. This function multiplies the current element (a) by the accumulator value (n), which starts at the initial value of 1.
    .reduce((n,a) => a * n, 1)
};

//So, overall, this code takes an array of arrays, creates a new array with the size of each inner array's unique elements, and then multiplies all of those values together to get a single result.