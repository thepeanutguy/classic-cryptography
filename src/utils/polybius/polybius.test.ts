import polybius from './polybius';
import alphabet from "#/utils/consts/alphabet";
import numbers from "#/utils/consts/numbers";

describe('polybius', () => {
  test('array of length six, each containing an array containing six unique alpha-numeric characters', () => {
    const character = [...alphabet, ...numbers];
    const results = polybius(character);

    expect(results).toHaveLength(6);

    let counter = 0;

    results.forEach((result) => {
      expect(result).toHaveLength(6);

      for (const letter of result) {
        expect(letter).toStrictEqual(character[counter]);

        counter += 1;
      }
    });
  });
});
