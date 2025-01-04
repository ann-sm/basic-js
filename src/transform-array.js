const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const arrayError = new Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];

  if (Array.isArray(arr) === true) {
    newArr = arr.map(x => x);

    for (let i = 0; i < newArr.length; i++) {
      if (i === 0) {
        if (newArr[i] === '--discard-prev' || newArr[i] === '--double-prev') {
          newArr[i] = 'deleted';
        }
      }
      if (i === newArr.length - 1) {
        if (newArr[i] === '--discard-next' || newArr[i] === '--double-next') {
          newArr[i] = 'deleted';
        }
      }
      if (newArr[i] === '--discard-next') {
        newArr[i] = 'deleted';
        newArr[i + 1] = 'deleted';
      }
      if (newArr[i] === '--discard-prev') {
        newArr[i - 1] = 'deleted';
        newArr[i] = 'deleted';
      }
      if (newArr[i] === '--double-next') {
        newArr[i] = newArr[i + 1];
      }
      if (newArr[i] === '--double-prev') {
        newArr[i] = newArr[i - 1];
      } 
    }
  } else {
    throw arrayError;
  }

  return newArr.filter((x) => x !== 'deleted');

  // remove line with error and write your code here
}

module.exports = {
  transform
};
