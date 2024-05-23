/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  const sanitizedString = str
    .toLowerCase()
    .split("")
    .filter((char) => {
      const charCode = char.charCodeAt(0);
      return charCode >= 97 && charCode <= 122;
    })
    .join("");

  return sanitizedString.split("").reverse().join("") === sanitizedString;
}

module.exports = isPalindrome;
