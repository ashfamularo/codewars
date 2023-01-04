// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

//  

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false

/**
 /* @param {string} ransomNote
 /* @param {string} magazine
 /* @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
  const arr = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
      if (arr.indexOf(ransomNote[i]) === -1) {
          return false;
      } else {
          arr.splice(arr.indexOf(ransomNote[i]), 1);
      }
  }
  return true;
};