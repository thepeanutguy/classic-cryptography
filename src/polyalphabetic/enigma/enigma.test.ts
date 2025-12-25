import Enigma from './enigma';
import Plugboard from './parts/plugboard';
import Reflector, { reflectorB } from './parts/reflector';
import Rotor, { rotorI, rotorII, rotorIII } from './parts/rotor';

describe('Enigma', () => {
  test('', () => {
    const enigma = new Enigma(
      [new Rotor(rotorI), new Rotor(rotorII), new Rotor(rotorIII)],
      new Reflector(reflectorB),
      new Plugboard([]),
    );
  });
});
