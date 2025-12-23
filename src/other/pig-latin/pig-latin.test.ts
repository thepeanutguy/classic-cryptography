import pigLatin from './pig-latin';

describe('pigLatin', () => {
  test.each`
    plainText    | expected
    ${''}        | ${''}
    ${'pig'}     | ${'igpay'}
    ${'pig pig'} | ${'igpay igpay'}
    ${'latin'}   | ${'atinlay'}
    ${'banana'}  | ${'ananabay'}
    ${'a'}       | ${'away'}
    ${'open'}    | ${'openway'}
  `('$plainText to $expected', ({ plainText, expected }) => {
    const result = pigLatin(plainText);

    expect(result).toStrictEqual(expected);
  });
});
