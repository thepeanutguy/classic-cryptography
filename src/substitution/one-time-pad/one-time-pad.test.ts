import oneTimePad from './one-time-pad';

describe('oneTimePad', () => {
  test('throw error when plain text is longer than key', () => {
    expect(() => oneTimePad('encode', 'three', 'one')).toThrow('the key must be at least as long as the plaintext');
  });

  test.each`
    purpose     | plainText  | key        | expected
    ${'encode'} | ${'hello'} | ${'XMCKL'} | ${'EQNVZ'}
    ${'decode'} | ${'EQNVZ'} | ${'XMCKL'} | ${'HELLO'}
  `('$purpose "$plainText" via "$key" to "$expected"', (args) => {
    const { purpose, plainText, key, expected } = args;

    const result = oneTimePad(purpose, plainText, key);

    expect(result).toStrictEqual(expected);
  });
});
