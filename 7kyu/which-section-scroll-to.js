// Description:

// Your website is divided vertically in sections, and each can be of different size (height).
// You need to establish the section index (starting at 0) you are at, given the scrollY and sizes of all sections.
// Sections start with 0, so if first section is 200 high, it takes 0-199 "pixels" and second starts at 200.
// Example:

// With scrollY = 300 and sizes = [300,200,400,600,100]

// the result will be 1 as it's the second section.

// With scrollY = 1600 and size = [300,200,400,600,100]

// the result will be -1 as it's past last section.

// Given the scrollY integer (always non-negative) and an array of non-negative integers (with at least one element), calculate the index (starting at 0) or -1 if scrollY falls beyond last section (indication of an error).



// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY, sizes) {
  //if scrollY is greater than the sum of the array return -1
  let sum = 0;

  sizes.forEach(size => (sum += size));

  if (scrollY >= sum) {
    return -1;
  }
  
  let arrSum = 0;
  
  //sum the array until the scrollY is greater
  for (let i = 0; i < sizes.length; i++) {
    arrSum += sizes[i];
    
    //if scrollY is exact the same values of index array, return index + 1
    if (arrSum === scrollY) {
      return i + 1;
    }
    
    if (arrSum > scrollY) {
      return i;
    }
  }
}