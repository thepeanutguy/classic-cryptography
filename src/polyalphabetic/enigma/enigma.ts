import Plugboard from './parts/plugboard';
import type Rotor from './parts/rotor';
import type Reflector from './parts/reflector';
import isSingleAlphabetCharacter from './utils/isSingleAlphabetCharacter';

class Edigma {
  protected currentRotorIndex = 0;

  constructor(
    protected rotors: Rotor[],
    protected reflector: Reflector,
    protected plugboard: Plugboard = new Plugboard([]),
  ) {}

  protected incrementCurrentRotor(): void {
    if (this.currentRotorIndex === this.rotors.length - 1) {
      throw new Error('');
    }

    this.currentRotorIndex += 1;
  }

  protected getCurrentRotor(): Rotor {
    const rotor = this.rotors[this.currentRotorIndex];

    if (!rotor) {
      throw new Error(`no rotor at index ${this.currentRotorIndex}`);
    }

    return rotor;
  }

  protected letterThroughRotors(
    letter: string,
    direction: 'left-to-right' | 'right-to-left',
  ): string {
    const rotors =
      direction === 'left-to-right' ? this.rotors : this.rotors.toReversed();

    return rotors.reduce((acc, rotor, index) => {
      acc = rotor.enter(acc);

      // TODO: should this only happen on key press, not on second entry?
      if (index === this.currentRotorIndex) {
        rotor.increment(() => {
          this.incrementCurrentRotor();
        });
      }

      return acc;
    }, letter);
  }

  enter(letter: string): string {
    if (!isSingleAlphabetCharacter(letter)) {
      throw new Error(
        `rotor letter ${letter} is not a single alphabetical character`,
      );
    }

    const firstPassLetter = this.letterThroughRotors(letter, 'right-to-left');
    const reflectedLetter = this.reflector.enter(firstPassLetter);
    const secondPassLetter = this.letterThroughRotors(
      reflectedLetter,
      'left-to-right',
    );

    return this.plugboard.enter(secondPassLetter);
  }
}

export default Edigma;
