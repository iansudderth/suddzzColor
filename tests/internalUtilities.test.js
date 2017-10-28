var { getFormat, outputOriginalFormat } = require('../lib/internalUtilites');
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

describe('getFormat', () => {
  it('returns a string', () => {});

  it('returns null on invalid input', () => {});
});

describe('outputOriginalFormat', () => {
  it('returns a string', () => {});

  it("returns a string in the color's original format if passed a tinyColor object", () => {});

  it('echos the input in its original format if input is a valid color string', () => {});

  it('returns null on invalid input', () => {});
});
