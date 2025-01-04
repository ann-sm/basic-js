const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let countStr = '';
  let result = '';
  
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
      countStr = count.toString();
    } else {
      result = `${result}${countStr}${str[i - 1]}`;
      count = 1;
      countStr = '';
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
