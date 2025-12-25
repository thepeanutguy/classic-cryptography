import Plugboard from './plugboard';

describe('Plugboard', () => {
  test('does not convert when no plugboards are provided', () => {
    const plugboard = new Plugboard([]);

    const result = plugboard.enter('a');

    expect(result).toStrictEqual('a');
  });

  test('conver letter', () => {
    const plugboard = new Plugboard([{ head: 'a', tail: 'z' }]);

    expect(plugboard.enter('a')).toStrictEqual('z');
    expect(plugboard.enter('z')).toStrictEqual('a');
    expect(plugboard.enter('c')).toStrictEqual('c');
    expect(() => plugboard.enter('')).toThrow();
    expect(() => plugboard.enter(' ')).toThrow();
    expect(() => plugboard.enter('1')).toThrow();
    expect(() => plugboard.enter('$')).toThrow();
    expect(() => plugboard.enter('ab')).toThrow();
  });
});
