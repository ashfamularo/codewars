//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  let reverseX = x.toLowerCase().split('').reverse().join('');
  if (x.toLowerCase() == reverseX) {
    return true;
  } else {
    return false;
  }
}