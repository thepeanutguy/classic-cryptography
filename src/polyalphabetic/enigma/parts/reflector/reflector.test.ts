import Reflector from './reflector';
import { reflectorA } from './reflector.const';

describe('Reflector', () => {
  test('convert letter', () => {
    const reflector = new Reflector(reflectorA);

    expect(reflector.enter('a')).toStrictEqual('E');
    expect(reflector.enter('A')).toStrictEqual('E');
    expect(() => reflector.enter('')).toThrow();
    expect(() => reflector.enter(' ')).toThrow();
    expect(() => reflector.enter('1')).toThrow();
    expect(() => reflector.enter('ab')).toThrow();
  });
});
