import type { ValueOfLetter } from './valueOfLetter.interface';

const valueOfLetter: ValueOfLetter = (letter) => {
  return letter.charCodeAt(0) - 65;
};

export default valueOfLetter;
