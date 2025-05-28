import vigenere from './vigenere';

describe('vigenere', () => {
  test.each`
    plainText                         | key               | expected
    ${'attackatdawn'}                 | ${'LEMONLEMONLE'} | ${'LXFOPVEFRNHR'}
    ${'cryptoisshortforcryptography'} | ${'ABCD'}         | ${'CSASTPKVSIQUTGQUCSASTPIUAQJB'}
  `('encode "$plainText" via "$key" to "$expected"', (args) => {
    const { plainText, key, expected } = args;

    const result = vigenere(plainText, key);

    expect(result).toStrictEqual(expected);
  });
});
