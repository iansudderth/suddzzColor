var {
  hsl,
  hsla,
  hue,
  saturation,
  lightness,
  adjustHue,
  lighten,
  darken,
  saturate,
  desaturate,
  greyScale,
  complement,
  invert,
} = require('../lib/HSLfunctions');

var {
  hsvTest,
  hsvaTest,
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
} = require('./formatRegEx');

describe('hsl', () => {
  it('returns a string', () => {});

  it('outputs in HSL format', () => {});

  it('uses 0 as a value when no argument is passed', () => {});

  it('returns null on invalid input', () => {});
});

describe('hsla', () => {
  it('returns a string', () => {});

  it('outputs in HSLA format', () => {});

  it('uses 0 as a value when no argument is passed, or 1 for alpha', () => {});

  it('returns null on invalid input', () => {});
});

describe('hue', () => {
  it('returns a number', () => {});

  it('returns a number between 0 and 360', () => {});

  it('returns the hue component of a color', () => {});

  it('returns null on invalid input', () => {});
});

describe('saturation', () => {
  it('returns a number if no mode is given', () => {});

  it('returns a value corresponding to the mode', () => {});

  it('returns the saturation component of a color', () => {});

  it('returns null on invalid input', () => {});
});

describe('lightness', () => {
  it('returns a number if no mode is given', () => {});

  it('returns a value corresponding to the mode', () => {});

  it('returns the lightness component of a color', () => {});

  it('returns null on invalid input', () => {});
});

describe('adjustHue', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('changes the hue based on the given number', () => {});
});

describe('lighten', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('changes the lightness based on the given value', () => {});

  it('returns the original color if no lightness value is passed in', () => {});
});

describe('darken', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('changes the darkness based on the given value', () => {});

  it('returns the original color if no darkness value is passed in', () => {});
});

describe('saturate', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('changes the saturation based on the given value', () => {});

  it('desaturates the color on a negative input', () => {});

  it('returns the original color if no saturation value is passed in', () => {});
});

describe('desaturate', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('changes the saturation negatively based on the given value', () => {});

  it('saturates the color on a negative input', () => {});

  it('returns the original color if no saturation value is passed in', () => {});
});

describe('greyScale', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('converts a color to its greyscale', () => {});
});

describe('complement', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('returns the complement of the color', () => {});
});

describe('invert', () => {
  it('returns a string', () => {});

  it("outputs in it's original format if no format is given", () => {});

  it('outputs in the given format if one is passed', () => {});

  it('returns null on invalid input', () => {});

  it('returns the invert of the color', () => {});
});
