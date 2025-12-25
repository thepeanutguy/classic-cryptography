import alphabet from '#/utils/consts/alphabet';
import type { Plug } from './plugboard.interface';

class Plugboard {
  plugs: Plug[];

  constructor(plugs: Plug[]) {
    this.plugs = plugs;
  }

  enter(letter: string): string {
    if (!alphabet.includes(letter.toUpperCase())) {
      throw new Error(
        `plugboard letter ${letter} is not a single alphabetical character`,
      );
    }

    let match;

    for (const plug of this.plugs) {
      if (plug.head.toUpperCase() === letter.toUpperCase()) {
        match = plug.tail;

        break;
      }

      if (plug.tail.toUpperCase() === letter.toUpperCase()) {
        match = plug.head;

        break;
      }
    }

    return match ?? letter;
  }
}

export default Plugboard;
