/**
@param {string} str
@returns {number}
*/
module.exports = function(str){
  //Solution goes here

  // vowel map used to keep track of vowel count
  const vowelMap = new Map([
    ["a", 0],
    ["e", 0],
    ["i", 0],
    ["o", 0],
    ["u", 0]
  ]);
  console.log(vowelMap)

  // iterate through chars of input string
  for(char of str){
    if(vowelMap.has(char)){ // if the char is a vowel
      vowelMap.set(char, vowelMap.get(char) + 1);
    }
  }

  // return the sum of the vowels stored in vowelMap
  return vowelMap.get("a") + vowelMap.get("e") + vowelMap.get("i") + vowelMap.get("o") + vowelMap.get("u");
}