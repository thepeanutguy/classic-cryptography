import type { AdfgvxFn, BuildTranslationFn, BuildTableFn, BuildSortedTable } from './adfgvc.interface';
import polybius from '#/utils/polybius';

const ADFGVX_KEYS = ['A', 'D', 'F', 'G', 'V', 'X'];

// FIXME: test.
const buildTranslation: BuildTranslationFn = (plainText, code): string => {
  const square = polybius(code);
  let translation = '';

  for (let i = 0; i < plainText.length; i += 1) {
    const letter = plainText[i];

    for (const row of square) {
      const colIndex = square.indexOf(row);
      const rowIndex = row.findIndex((entry) => (
        entry.toUpperCase() === letter.toUpperCase()),
      );

      if (rowIndex > -1) {
        translation += `${ADFGVX_KEYS[colIndex]}${ADFGVX_KEYS[rowIndex]}`;
      }
    }
  }

  return translation;
};

// FIXME: test.
const buildTable: BuildTableFn = (translation, key): string[] => {
  const table: string[] = [];
  let counter = 0;

  for (let i = 0; i < translation.length / key.length; i += 1) {
    const position = i * key.length;
    table[counter] = translation.slice(position, position + key.length);

    if (position % key.length === 0) {
      counter += 1;
    }
  }

  return table;
}

// FIXME: quality and test.
export const buildSortedTable: BuildSortedTable = (table, key): string[] => {
  const outputs: string[][] = [
    [],
    [],
    [],
    [],
  ];

  key.split('')
    .map((keyLetter, index) => ({
      keyLetter,
      originalIndex: index,
    }))
    .sort((a, b) => a.keyLetter.charCodeAt(0) - b.keyLetter.charCodeAt(0))
    .map((group) => {
      outputs[0].push(table[0][group.originalIndex]);
      outputs[1].push(table[1][group.originalIndex]);
      outputs[2].push(table[2][group.originalIndex]);
      outputs[3].push(table[3][group.originalIndex]);
    });

  return outputs.map((output) => output.toString().replaceAll(',', ''));
};

// FIXME: quality and test.
const buildCipher = (table: string[]): string => {
  let output = '';

  if (table.length === 0) {
    return '';
  }

  let counter = 0;
  for (let i = 0; i < table[0].length; i += 1) {
    output += table[0][counter];
    output += table[1][counter];
    output += table[2][counter];
    output += table[3][counter];
    output += ' ';

    counter += 1;
  }

  return output.trim();
}

const adfgvx: AdfgvxFn = (plainText, code, key) => {
  if (code.length !== 36) {
    throw new Error('the key must contain 36 characters')
  }

  const translation = buildTranslation(plainText, code);
  const table = buildTable(translation, key);
  const sortedTable = buildSortedTable(table, key);

  return buildCipher(sortedTable);
};

export default adfgvx;
