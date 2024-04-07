import type { PolybiusFn } from './polybius.interface';

const polybius: PolybiusFn = (characters) => {
  const square: string[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  let x = 0;
  let y = 0;

  for (const character of characters) {
      square[x].push(character)

      y += 1;

      if (y === 6) {
        x += 1
        y = 0;
      }
  }

  return square;
};

export default polybius;
