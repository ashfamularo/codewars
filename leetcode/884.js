// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]

/**
/ * @param {string} s1
/ * @param {string} s2
/ * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
  let arr1 = s1.split(" ")
  let arr2 = s2.split(" ");
  let bigArr = arr1.concat(arr2)
  let uncommon = [];
  for (let i = 0; i < bigArr.length; i++){
      if (bigArr.indexOf(bigArr[i]) === bigArr.lastIndexOf(bigArr[i])){
          uncommon.push(bigArr[i])
      }
  }
  return uncommon;
};

