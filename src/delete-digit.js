const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numString = n.toString();
  let result = 0;

  for (let i = 0; i < numString.length; i += 1) {
    numStringNew = Number(numString.replace(numString[i], ''));

    if (numStringNew > result) {
      result = numStringNew;
    }
  }
  return result;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
