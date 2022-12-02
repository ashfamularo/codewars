// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


// function distinct(a) {
//   let answer = [];
//   for (let i = 0; i < a.length; i++){
//     if (i === a.indexOf(a[i])){
//       answer.push(a[i])
//     }
//   }
//   return answer;
// }

const distinct = a => a.filter((el, index) => a.indexOf(el) === index);