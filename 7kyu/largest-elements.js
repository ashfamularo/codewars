// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]


function largest(n,xs){
  xs.sort((prev, curr) => curr - prev)
  let answer = []
  for (let i = 0; i < n; i++) {
    answer.push(xs[i])
  }
  return answer.sort((prev, curr) => prev - curr)
}