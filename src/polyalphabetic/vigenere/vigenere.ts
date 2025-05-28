import shift from '#/utils/shift';
import mod from '#/utils/mod';
import valueOfLetter from '#/utils/valueOfLetter';
import type { VigenereFn } from './vigenere.interface';

const vigenere: VigenereFn = (plainText, key) => {
  let cipherText = '';

  for (let i = 0; i < plainText.length; i += 1) {
    const plainTextLetter = plainText[i].toUpperCase();

    if (plainTextLetter < 'A' || plainTextLetter > 'Z') {
      return cipherText += plainTextLetter;
    }

    const keyIndex = mod(i, key.length);
    const keyLetter = valueOfLetter(key[keyIndex].toUpperCase());

    cipherText += shift(plainTextLetter, keyLetter);
  }

  return cipherText;
};

export default vigenere;
