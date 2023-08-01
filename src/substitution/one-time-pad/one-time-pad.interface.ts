export type OneTimePadFn = (purpose: 'encode' | 'decode', plainText: string, key: string) => string;
