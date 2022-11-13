// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"



// function replace(s){
//   let answer = [];
//   let array = s.split('')
//   array.forEach( el => {
//     if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u' || el == 'A' || el == 'E' || el == 'I' || el == 'O' || el == 'U') {
//         answer.push('!')
//     } else {
//       answer.push(el)
//     }
//   })
//   return answer.join('');
// }

function replace(s){
  return s.replace(/[aeoiu]/ig, '!')  
}