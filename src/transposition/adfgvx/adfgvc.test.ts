import adfgvx, {buildSortedTable} from './adfgvx';

enum To {
  THROW = 'throw',
  CONTINUE = 'continue',
}

describe('adfgvx', () => {
  test.each`
    length | expected
    ${35}  | ${To.THROW}
    ${36}  | ${To.CONTINUE}
    ${37}  | ${To.THROW}
  `('$expected when code is $length characters', ({ length, expected }) => {
    const matchers = expect(() => {
      return adfgvx('text', 'a'.repeat(length).split(''), 'key');
    });

    expected === To.THROW
      ? matchers.toThrow('the key must contain 36 characters')
      : matchers.not.toThrow('the key must contain 36 characters');
  })

  describe('buildSortedTable', () => {
    test('buildSortedTable', () => {
      const table = [
        'ADDDDDA',
        'DAGVGAD',
        'DDAFDGV',
        'FVFADDX',
      ];

      const result = buildSortedTable(table, 'PRIVACY');

      expect(result).toStrictEqual([
        'DDDADDA',
        'GAGDAVD',
        'DGADDFV',
        'DDFFVAX',
      ]);
    });
  });

  const code = [
    'N', 'A',	'1', 'C', '3', 'H',
    '8', 'T', 'B', '2', 'O', 'M',
    'E', '5', 'W', 'R', 'P', 'D',
    '4', 'F', '6', 'G', '7', 'I',
    '9', 'J', '0', 'K', 'L', 'Q',
    'S', 'U', 'V', 'X', 'Y', 'Z',
  ];

  test.each`
      plainText             | code    | key          | expected
      ${'attack at 1200am'} | ${code} | ${'PRIVACY'} |${'DGDD DAGD DGAF ADDF DADV DVFA ADVX'}
    `('', ({ plainText, code, key, expected }) => {
      const result = adfgvx(plainText, code, key);

      expect(result).toStrictEqual(expected);
  });
});
