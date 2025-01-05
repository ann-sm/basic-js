const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
    // this.message = message;
    // this.key = key;
    // this.encryptedMessage = encryptedMessage;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      let encryptedArray = [];

      message = message.toUpperCase();
      key = key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length).toUpperCase();
  
      for (let i = 0; i < message.length; i++) {
        let letterIndex;
        let shift;
  
        if (message[i] >= 'A' && message[i] <= 'Z') {
          letterIndex = message.charCodeAt(i) - 'A'.charCodeAt(0);
          shift = key.charCodeAt(i) - 'A'.charCodeAt(0);
  
          encryptedArray.push(String.fromCharCode('A'.charCodeAt(0) + (letterIndex + shift) % 26));
        }
  
        else {
          key = key.slice(0, i) + ' ' + key.slice(i);
          encryptedArray.push(message[i]);
        } 
      }
  
      if (this.mode === false) {
        encryptedArray.reverse();
      }
  
      return encryptedArray.join('');
    }


    // remove line with error and write your code here
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      let decryptedArray = [];

      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.repeat(Math.ceil(encryptedMessage.length / key.length)).slice(0, encryptedMessage.length).toUpperCase();

      for (let i = 0; i < encryptedMessage.length; i++) {
        let letterIndex;
        let shift;

        if (encryptedMessage[i] >= 'A' && encryptedMessage[i] <= 'Z') {
          letterIndex = encryptedMessage.charCodeAt(i) - 'A'.charCodeAt(0);
          shift = key.charCodeAt(i) - 'A'.charCodeAt(0);
  
          decryptedArray.push(String.fromCharCode('A'.charCodeAt(0) + (letterIndex - shift + 26) % 26));
        }
  
        else {
          key = key.slice(0, i) + ' ' + key.slice(i);
          decryptedArray.push(encryptedMessage[i]);
        } 
      }

      if (this.mode === false) {
        decryptedArray.reverse();
      }
  
      return decryptedArray.join('');
    // remove line with error and write your code here
   }
  }
}

module.exports = {
  VigenereCipheringMachine
};
