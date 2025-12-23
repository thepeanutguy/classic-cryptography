import type {
  PigLain,
  HasVowelBeginning,
  MutateVowelWord,
  MutateConsonantWord,
} from './pig-latin.interface';

const hasVowelBeginning: HasVowelBeginning = (word) => {
  if (word.length === 0) {
    return false;
  }

  return ['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase());
};

const mutateVowelWord: MutateVowelWord = (word) => {
  return `${word}way`;
};

const mutateConsonantWord: MutateConsonantWord = (word) => {
  if (word.length === 0) {
    return word;
  }

  if (word.length === 1) {
    return `${word}ay`;
  }

  const consonant = word[0];

  return `${word.slice(1, word.length)}${consonant}ay`;
};

const pigLatin: PigLain = (plainText) =>
  plainText
    .split(' ')
    .reduce((acc, word) => {
      acc += hasVowelBeginning(word)
        ? mutateVowelWord(word)
        : mutateConsonantWord(word);

      return (acc += ' ');
    }, '')
    .trim();

export default pigLatin;
