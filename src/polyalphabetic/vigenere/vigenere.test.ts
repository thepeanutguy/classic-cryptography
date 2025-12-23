import vigenere from './vigenere';

describe('vigenere', () => {
  test.each`
    plainText                         | key               | expected
    ${'attackatdawn'}                 | ${'LEMONLEMONLE'} | ${'LXFOPVEFRNHR'}
    ${'cryptoisshortforcryptography'} | ${'ABCD'}         | ${'CSASTPKVSIQUTGQUCSASTPIUAQJB'}
  `(
    'encode "$plainText" via "$key" to "$expected"',
    ({ plainText, key, expected }) => {
      const result = vigenere(plainText, key);

      expect(result).toStrictEqual(expected);
    },
  );
});
