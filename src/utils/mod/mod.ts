import type { Mod } from './mod.interface';

const mod: Mod = (n, p) => {
  if (n < 0) {
    n = p - (Math.abs(n) % p);
  }

  return n % p;
};

export default mod;
