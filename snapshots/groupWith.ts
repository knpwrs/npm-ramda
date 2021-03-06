import R_groupWith = require('../ramda/dist/src/groupWith');

declare const string_to_boolean: (x: string) => boolean;
declare const string_array: string[];
declare const string: string;

// @dts-jest:pass:snap -> <U extends string[] | ArrayLike<string>>(list: U) => U[]
R_groupWith(string_to_boolean);
// @dts-jest:pass:snap -> string[]
R_groupWith(string_to_boolean, string);
// @dts-jest:pass:snap -> string[][]
R_groupWith(string_to_boolean, string_array);
