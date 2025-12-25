import alphabet from '#/utils/consts/alphabet';
import type { IsSingleAlphabetCharacter } from './isSingleAlphabetCharacter.interface';

const isSingleAlphabetCharacter: IsSingleAlphabetCharacter = (letter) => {
  return !alphabet.includes(letter.toUpperCase());
};

export default isSingleAlphabetCharacter;
