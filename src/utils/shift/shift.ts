import mod from '#/utils/mod';
import type { ShiftFn } from './shift.interface';

const CHAR_A = 65;
const CHAR_Z = 90;

const shift: ShiftFn = (plainText, key) => {
  let cipherText = '';

  for (let i = 0; i < plainText.length; i += 1) {
    const letter = plainText[i];
    let code = plainText.charCodeAt(i);

    if (code < CHAR_A || code > CHAR_Z) {
      cipherText += letter;

      continue;
    }

    code -= 65;
    code = mod(code + key, 26);
    code += 65;

    cipherText += String.fromCharCode(code);
  }

  return cipherText;
};

export default shift;
