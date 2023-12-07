/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 1) return true;
  str.toLowerCase();
  let i = 0,
    j = str.length;
  while (i < j) {
    if (str.charAt(i) != str.charAt(j)) return false;
    i++;
    j++;
  }
  return true;
}

module.exports = isPalindrome;
