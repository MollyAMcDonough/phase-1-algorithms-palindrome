function isPalindrome(word) {
  // Write your algorithm here
  const reverse = [];
  for (let i=0; i<word.length;i++){
      reverse[word.length-i]=word[i];
  }
  return reverse.join("")===word;
}

/* 
  Add your pseudocode here
  wrote it out in my notebook
*/

/*
  Add written explanation of your solution here
  create empty array, loop through string, and save each character
  to array in reverse index, convert reversed array to string and
  return result of comparison
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //also tested functionality in separate repl :
  /*
  const string = "dis a string";

  for (char of string) {
      //console.log(char);
  }

  const reverse = [];
  for (let i=0; i<string.length;i++){
      console.log(string[i])
      reverse[string.length-i]=string[i];
      console.log(reverse);
  }
  
  console.log(reverse.join(""))
  */
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
