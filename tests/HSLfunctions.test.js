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
  hsvFormat,
  hsvaFormat,
  hslFormat,
  hslaFormat,
  hexFormat,
  hex8Format,
  rgbFormat,
  rgbaFormat,
} = require('./formatRegEx');

describe('hsl', () => {
  it('returns a string', () => {});

  it('outputs in HSL format', () => {});

  it('returns null on invalid input', () => {});
});

describe('hsla', () => {
  it('returns a string', () => {});

  it('outputs in HSLA format', () => {});

  it('returns null on invalid input', () => {});
});

describe('hue', () => {
  it('returns a number', () => {});

  it('returns a number between 0 and 360', () => {});
});

describe('saturation', () => {
  it('returns a number if no mode is given', () => {});

  it('returns a value corresponding to the mode', () => {});
});

describe('lightness', () => {
  it('returns a number if no mode is given', () => {});

  it('returns a value corresponding to the mode', () => {});
});

describe('adjustHue', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('lighten', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('darken', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('saturate', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('greyScale', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('complement', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});

describe('invert', () => {
  it('returns a string', () => {});

  it("outputs in it's original format", () => {});

  it('returns null on invalid input', () => {});
});
