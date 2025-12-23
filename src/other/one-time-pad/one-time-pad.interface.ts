export type OneTimePad = (
  purpose: 'encode' | 'decode',
  plainText: string,
  key: string,
) => string;
