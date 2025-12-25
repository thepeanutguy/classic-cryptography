import type { RotorWiring } from './rotor.interface';
import isSingleAlphabetCharacter from '../../utils/isSingleAlphabetCharacter';

class Rotor {
  protected position;

  constructor(
    protected wiring: RotorWiring,
    startPosition = 0,
  ) {
    this.position = startPosition;
  }

  increment(onRotorFullRevolution: () => void): void {
    if (this.position === this.wiring.tail.length - 1) {
      this.position = 0;

      return onRotorFullRevolution();
    }

    this.position += 1;
  }

  enter(letter: string): string {
    if (!isSingleAlphabetCharacter(letter)) {
      throw new Error(
        `rotor letter ${letter} is not a single alphabetical character`,
      );
    }

    const index = this.wiring.head.findIndex(
      (head) => head.toUpperCase() === letter.toUpperCase(),
    );

    if (index === -1) {
      throw new Error(`letter ${letter} does not exist in rotor`);
    }

    return this.wiring.tail[index];
  }
}

export default Rotor;
