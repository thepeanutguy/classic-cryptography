import alphabet from '#/utils/consts/alphabet';
import valueOfLetter from '#/utils/valueOfLetter';
import type { Atbash } from './atbash.interface';

const atbash: Atbash = (plainText) => {
  let cipherText = '';

  for (let i = 0; i < plainText.length; i += 1) {
    const plainTextLetter = plainText[i].toUpperCase();

    if (plainTextLetter < 'A' || plainTextLetter > 'Z') {
      cipherText += plainTextLetter;

      continue;
    }

    cipherText += alphabet.toReversed()[valueOfLetter(plainTextLetter)];
  }

  return cipherText;
};

export default atbash;
