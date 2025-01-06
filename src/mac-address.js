const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const str = n.toString();
  const strArr = str.split('-');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length !== 2) {
      return false;
    }
    if ((Number(strArr[i][0]) < 0 && Number(strArr[i][0]) > 9) || (Number(strArr[i][1]) < 0 && Number(strArr[i][1]) > 9)) {
      return false;
    }
    if (strArr[i][0] > 'F' || strArr[i][1] > 'F') {
      return false;
    } 
  }
  return true;
  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address
};
