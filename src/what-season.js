const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date instanceof Date && Object.getOwnPropertyNames(date).length === 0) {
    if (date.getMonth() <= 1 || date.getMonth() === 11) {
      return 'winter';
    }
    if (date.getMonth() <= 4) {
      return 'spring';
    }
    if (date.getMonth() <= 7) {
      return 'summer';
    }
    if (date.getMonth() <= 10) {
      return 'autumn';
    }
  }
  if (date !== undefined) {
    throw new Error('Invalid date!');
  } else {
    return 'Unable to determine the time of year!';
  }

  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
