import isSingleAlphabetCharacter from '../../utils/isSingleAlphabetCharacter/index.js';
import type { ReflectorWiring } from './reflector.interface';

class Reflector {
  constructor(protected wiring: ReflectorWiring) {}

  enter(letter: string) {
    if (!isSingleAlphabetCharacter(letter)) {
      throw new Error(
        `reflector letter ${letter} is not a single alphabetical character`,
      );
    }

    const index = this.wiring.head.findIndex(
      (head) => head.toUpperCase() === letter.toUpperCase(),
    );

    if (index === -1) {
      throw new Error(`letter ${letter} does not exist in reflector`);
    }

    return this.wiring.tail[index];
  }
}

export default Reflector;
