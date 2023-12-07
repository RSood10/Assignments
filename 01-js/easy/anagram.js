/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log(str2.charAt(1));
  if (str1.length != str2.length) return false;

  let st1 = [];
  let st2 = [];

  for (let i = 0; i < str1.length; i++) {
    st1[i] = str1.charAt(i).toLowerCase();
    st2[i] = str2.charAt(i).toLowerCase();
    console.log(str2.charAt(i));
  }
  st1.sort();
  st2.sort();

  for (let i = 0; i < str1.length; i++) {
    if (st1[i] != st2[i]) {
      console.log(str1[i], str2[i]);
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
