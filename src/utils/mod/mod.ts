import type { ModFn } from './mod.interface';

const mod: ModFn = (n, p) => {
  if ( n < 0 ) {
    n = p - Math.abs(n) % p;
  }

  return n % p;
}

export default mod;
