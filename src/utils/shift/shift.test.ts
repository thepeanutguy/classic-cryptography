import shift from './shift';

describe('shift', () => {
  test.each`
    plainText                                        | key    | expected
    ${''}                                            | ${1}   | ${''}
    ${'A'}                                           | ${1}   | ${'B'}
    ${'A'}                                           | ${-1}  | ${'Z'}
    ${'A'}                                           | ${-26} | ${'A'}
    ${'A'}                                           | ${26}  | ${'A'}
    ${'A'}                                           | ${27}  | ${'B'}
    ${'A'}                                           | ${52}  | ${'A'}
    ${'A !'}                                         | ${3}   | ${'D !'}
    ${'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'} | ${-3}  | ${'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD'}
    ${'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD'}  | ${3}   | ${'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'}
  `('encode "$plainText" via $key to "$expected"', (args) => {
    const { plainText, key, expected } = args;

    const result = shift(plainText, key);

    expect(result).toStrictEqual(expected);
  });
});
