// Description:

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// function remove (string) {
//   let array = string.split('')
//   if (array[array.length -1] == '!'){
//    array.pop();
//     return array.join('')
//   } else {
//     return string;
//   }
// }

const remove = string => string.endsWith('!') ? string.slice(0, -1) : string;
