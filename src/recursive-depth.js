const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {


  calculateDepth(arr) {
    let counter = 1;
    let depth = 1;

    arr.forEach(el => {
      if (Array.isArray(el)) {
        counter = 1 + this.calculateDepth(el);

        if (depth < counter) {
          depth = counter;
        }
      }
    })
    
    return depth;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
