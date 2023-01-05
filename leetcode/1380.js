// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

//  

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

/**
/ * @param {number[][]} matrix
/ * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++){
      let rowMin = Math.min(...matrix[i]);
      let position = matrix[i].indexOf(rowMin);
      let colMax = 0;
      for (let j = 0; j < matrix.length; j++){
          colMax = Math.max(colMax, matrix[j][position]); 
      }
      if (colMax === rowMin){
          result.push(rowMin);
          break;
      }
  }
  return result;
};