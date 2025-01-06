const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = matrix.map(el => el);

  if (arr.flat().includes(true)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let count = 1;
  
        if (matrix[i][j] === true) {
          arr[i][j] = count;
        } else {
          if (i !== 0 && matrix[i - 1][j] === true) {
            count += 1;
          }
          if (i !== arr.length - 1 && matrix[i + 1][j] === true) {
            count += 1;
          }
          if (j !== 0 && matrix[i][j - 1] === true) {
            count += 1;
          }
          if (j !== arr.length - 1 && matrix[i][j + 1] === true) {
            count += 1;
          }   
          arr[i][j] = count; 
        }
      }
    }
    return arr;

  } else {
    let emptyArr = matrix.map((el, i) => el[i] = el.map((el, j) => el[j] = 0));
    return emptyArr;
  }
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
