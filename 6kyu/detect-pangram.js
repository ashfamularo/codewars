function isPangram(string){
  const regex = /[a-z]/gi;
  const arr = string.toLowerCase().match(regex);
  const filteredArr = arr.filter((item, index) => arr.indexOf(item) === index);
  if (filteredArr.length === 26){
    return true;
  } else {
    return false;
  }
}