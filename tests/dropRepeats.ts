import R_dropRepeats = require('../ramda/dist/src/dropRepeats');

declare const string_array: string[];

// @dts-jest:pass:snap
R_dropRepeats(string_array);
