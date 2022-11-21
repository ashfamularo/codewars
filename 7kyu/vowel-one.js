//vowelOne

// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"


// function vowelOne(s){
//   let l = s.toLowerCase();
//   let binary = '';
//   for (let i = 0; i < l.length; i++) {
//     if (l[i] == 'a' || l[i] == 'e' || l[i] == 'i' || l[i] == 'o' || l[i] == 'u') {
//         binary += '1';
//       } else {
//         binary += '0';
//       }
//     }
//   return binary;
// }

function vowelOne(s){
  let l = s.toLowerCase();
  let binary = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of l) {
    if (vowels.includes(char)) { 
      binary += '1';
    } else {
      binary += '0';
    }
  }
  return binary;
}