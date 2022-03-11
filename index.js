function isPalindrome(word) {
  // Write your algorithm here
  newWord = reverseWord(word);
  return word === newWord ? true : false
}

function reverseWord(str) {
  arrStr = Array.from(str);
  revStr = arrStr.reverse();
  joinStr = revStr.join("");
  return joinStr;
}

/* 
  Add your pseudocode here
  call function isPalindrome with argument string
  if string is the same when reversed
  return true
  if string is not the same
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
