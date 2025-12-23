import atbash from './atbash';

describe('atbash', () => {
  test.each`
    plainText           | expected
    ${'THIS IS A TEST'} | ${'GSRH RH Z GVHG'}
  `('$plainText to $expected', ({ plainText, expected }) => {
    const result = atbash(plainText);

    expect(result).toStrictEqual(expected);
  });
});
