// Description:

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)

// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


// function repeatStr (n, s) {
//   let longStr = '';
//   for (let i = 0; i < n; i++)
//     longStr+= s
//   return longStr;
// }

repeatStr = (n,s ) => s.repeat(n);