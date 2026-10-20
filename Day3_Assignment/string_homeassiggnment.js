// Assignment Details:  Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1: Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

const wordLength = (str) => {
  let arr = str.split(" ");
  let len = arr[arr.length - 1].length;
  return len;
};
let str1 = "Hello World";
console.log(wordLength(str1));

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

const wordLength1 = (str3) => {
  let arr = str3.trim().split(" ");
  let len = arr[arr.length - 1].length;
  return len;
};
let str2 = " fly me  to the  moon ";
console.log(wordLength1(str2));

// Example 3:  Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one,
// using all the letters.

const isAnagram = (st1, st2) => {
  let s1Trimmed = st1.trim().toLowerCase();
  let s2Trimmed = st2.trim().toLowerCase();
  let sortedS1 = s1Trimmed.split("").sort().join();
  let sortedS2 = s2Trimmed.split("").sort().join();
  if (sortedS1 === sortedS2) {
    return true;
  } else {
    return false;
  }
};
let s1 = "listen ";
let s2 = "silent";
console.log(isAnagram(s1, s2));
