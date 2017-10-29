var { rgb, rgba, red, green, blue, mix } = require('../lib/RGBfunctions');

var {
  hsvFormat,
  hsvaFormat,
  hslFormat,
  hslaFormat,
  hexFormat,
  hex8Format,
  rgbFormat,
  rgbaFormat,
} = require('./formatRegEx');

describe('rgb', () => {
  it('returns a string', () => {});

  it('returns a string in the rgb format', () => {});

  it('returns an rgb string with the given values', () => {});

  it('places 0s when an argument is not passed in', () => {});
});

describe('rgba', () => {
  it('returns a string', () => {});

  it('returns a string in the rgba format', () => {});

  it('returns an rgba string with the given values', () => {});

  it('places 0s when an argument is not passed in, or a 1 for alpha', () => {});
});

describe('red', () => {
  it('returns a string', () => {});

  it('returns the red value of a given color', () => {});

  it('returns null if invalid color', () => {});

  it('returns a value in the given mode, or byteScaleInt if none is passed', () => {});
});

describe('green', () => {
  it('returns a string', () => {});

  it('returns the green value of a given color', () => {});

  it('returns null if invalid color', () => {});

  it('returns a value in the given mode, or byteScaleInt if none is passed', () => {});
});

describe('blue', () => {
  it('returns a string', () => {});

  it('returns the blue value of a given color', () => {});

  it('returns null if invalid color', () => {});

  it('returns a value in the given mode, or byteScaleInt if none is passed', () => {});
});

describe('mix', () => {
  it('returns a string', () => {});

  it('returns a string in the format of the first argument', () => {});

  it('returns null if the colors are not valid', () => {});

  it('returns a mix of the two colors, weighted from the weight argument', () => {});
});
