import R_union = require('../ramda/dist/src/union');

declare const number_array: number[];

// @dts-jest:pass:snap
R_union(number_array);
// @dts-jest:pass:snap
R_union(number_array, number_array);
