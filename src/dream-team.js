const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = '';

  if (Array.isArray(members) === true) {
    const membersArr = members.filter(el => typeof el === 'string').map(el => el.trim().toUpperCase()).sort();

    for (let i = 0; i < membersArr.length; i++) {
      const memberName = membersArr[i].trim();
      const firstLetter = memberName[0];
      result = `${result}${firstLetter}`;
    }
    return result;
  }
  return false;
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
