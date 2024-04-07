export type AdfgvxFn = (plainText: string, code: string[], key: string) => string;
export type BuildTranslationFn = (plainText: string, code: string[]) => string;
export type BuildTableFn = (translation: string, key: string) => string[];
export type BuildSortedTable = (table: string[], key: string) => string[];
