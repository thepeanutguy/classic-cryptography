import type { OneTimePadFn } from './one-time-pad.interface';
import mod from '#/utils/mod';
import valueOfLetter from '#/utils/valueOfLetter';

const oneTimePad: OneTimePadFn = (purpose, plainText, key) => {
  if (plainText.length > key.length) {
    throw new Error('the key must be at least as long as the plaintext');
  }

  let cipherText = '';

  for (let i = 0; i < plainText.length; i += 1) {
    const plainTextLetter = plainText[i].toUpperCase();
    const keyLetter = key[i].toUpperCase();

    if (plainTextLetter < 'A' || plainTextLetter > 'Z') {
      return cipherText += plainTextLetter;
    }

    const plainTextLetterChar = valueOfLetter(plainTextLetter);
    const keyLetterChar = valueOfLetter(keyLetter);

    const combination = purpose === 'encode'
      ? plainTextLetterChar + keyLetterChar
      : plainTextLetterChar - keyLetterChar

    cipherText += String.fromCharCode(mod(combination, 26) + 65);
  }

  return cipherText;
};

export default oneTimePad;
