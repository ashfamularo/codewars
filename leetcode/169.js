// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//  

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//  

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

//  
// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
/ * @param {number[]} nums
/ * @return {number}
 */
// var majorityElement = function(nums) {
//   let hashMap = {};
//   for (let i = 0; i < nums.length; i++){
//       if (hashMap[nums[i]]){
//           hashMap[nums[i]]++;
//       } else {
//           hashMap[nums[i]] = 1;
//       } if (hashMap[nums[i]] >= nums.length / 2) {
//           return nums[i];
//       }
//   }
// };
// ! O(n) in time, O(n) in space b/c the code iterates through the input array once and for each element, it adds a new key-value pair or increases a key-value that already exists in the hash map.

var majorityElement = function(nums) {
  let candidate = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++){
      if (count === 0) {
          candidate = nums[i];
          count = 1;
      } else if (nums[i] === candidate) {
          count++;
      } else {
          count--;
      }
  }
  return candidate;
};
// ! O(n) in time, O(1) in space b/c it only requires two variables to keep track of -- candidate and count