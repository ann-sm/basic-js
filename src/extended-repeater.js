const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let additionResult = '';
  let separator = '+';
  let additionSeparator = '|';

  if (options.addition !== undefined) {
    for (let j = 1; j < options.additionRepeatTimes; j++) {
      if (options.additionSeparator !== undefined) {
        additionSeparator = options.additionSeparator;
      }
  
      additionResult = `${additionResult}${options.addition}${additionSeparator}`;
    }
  
    additionResult = `${additionResult}${options.addition}`;
  }

  for (let i = 1; i < options.repeatTimes; i++) {
    if (options.separator !== undefined) {
      separator = options.separator;
    }

    result = `${result}${str}${additionResult}${separator}`;


  }

  result = `${result}${str}${additionResult}`;

  return result;
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
