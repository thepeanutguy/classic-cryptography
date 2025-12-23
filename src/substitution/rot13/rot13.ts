import shift from '#/utils/shift';
import type { Rot13 } from './rot13.interface';

const rot13: Rot13 = (plainText) => shift(plainText, 13);

export default rot13;
