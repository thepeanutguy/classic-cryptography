import { ShuffleFn } from './shuffle.interface';

/**
 * Fisher–Yates shuffle
 *
 * @see https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @see https://stackoverflow.com/a/2450976
 */
const shuffle: ShuffleFn = (array) => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex],
    ];
  }

  return array;
}

export default shuffle;
