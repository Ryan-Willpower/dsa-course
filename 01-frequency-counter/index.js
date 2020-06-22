// takes 2 params, check if that shuffle string param is equal to original string
// expect time complexity: O(n)

function validAnagram(str, expect) {
  if (str.length !== expect.length) {
    return false;
  }

  if (str === "" && expect === "") {
    return true;
  }

  // create empty object
  const splitStr = {};
  const splitExpect = {};

  // loop
  for (let char of str) {
    if (char in splitStr) {
      // if no str in obj, add str to key, and set its value to 1
      splitStr[char] = splitStr[char] + 1;
    } else {
      //if str in obj, plus its value with 1
      splitStr[char] = 1;
    }
  }

  // loop that logic again with expect
  for (let char of expect) {
    if (char in splitExpect) {
      // if no str in obj, add str to key, and set its value to 1
      splitExpect[char] = splitExpect[char] + 1;
    } else {
      //if str in obj, plus its value with 1
      splitExpect[char] = 1;
    }
  }

  for (let char in splitStr) {
    if (!(char in splitExpect) || splitStr[char] !== splitExpect[char]) {
      return false;
    }
  }

  return true;
}
