const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainsArr = [];
  let domainsCounted = {};
  
  for (let i = 0; i < domains.length; i++) {
    const domainsSplited = domains[i].split('.');
    let domainName = '';
    
    for (let j = domainsSplited.length - 1; j >= 0; j--) {
      domainName = `${domainName}.${domainsSplited[j]}`;
      domainsArr.push(domainName);
    } 
  }

  domainsArr.forEach((el) => {
    domainsCounted[el] = domainsCounted[el] ? domainsCounted[el] + 1 : 1;
  })

  return domainsCounted;

  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
