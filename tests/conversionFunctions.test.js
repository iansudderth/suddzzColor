var _ = require('lodash');
var tinyColor = require('tinycolor2');
var { toHSL, toHex, toHex8, toRGB } = require('../lib/conversionFunctions');

var {
  hslFormat,
  hslaFormat,
  hexFormat,
  hex8Format,
  rgbFormat,
  rgbaFormat,
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
} = require('./formatRegEx');

var { blue, validTestColorArray, invalidColorArray } = require('./testColors');

// ==================================================

describe('toHSL', () => {
  it('outputs a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof toHSL(color)).toBe('string');
    });
  });

  it('outputs in HSL format', () => {
    _.each(validTestColorArray, color => {
      var convertedColor = toHSL(color);
      expect(hslTest(convertedColor) || hslaTest(convertedColor)).toBe(true);
    });
  });

  it('returns a converted color', () => {
    expect(toHSL(blue.rgb)).toBe(blue.hsl);
    expect(toHSL(blue.rgba)).toBe(blue.hsla);
    expect(toHSL(blue.hex)).toBe(blue.hsl);
    expect(toHSL(blue.hex8)).toBe(blue.hsla);
    expect(toHSL(blue.hsl)).toBe(blue.hsl);
    expect(toHSL(blue.hsla)).toBe(blue.hsla);
  });

  it('can accept tinyColor objects as an input', () => {
    var tColor = tinyColor('#0000FF');
    expect(toHSL(tColor)).toBe(blue.hsl);

    tColor.setAlpha(0.5);
    expect(toHSL(tColor)).toBe(blue.hsla);
  });

  it('bypasses alpha values when at 100%', () => {
    expect(toHSL('rgba(0,0,255,1)')).toBe(blue.hsl);
    expect(toHSL('#0000FFFF')).toBe(blue.hsl);
  });

  it('ignores the alpha value when alphaBypass is set to true', () => {
    expect(toHSL(blue.hex8, true)).toBe(blue.hsl);
    expect(toHSL(blue.hsla, true)).toBe(blue.hsl);
    expect(toHSL(blue.rgba, true)).toBe(blue.hsl);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(toHSL(color)).toBe(null);
    });
  });
});

// ==================================================

describe('toHex', () => {
  it('outputs a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof toHex(color)).toBe('string');
    });
  });

  it('outputs in Hex format', () => {
    _.each(validTestColorArray, color => {
      var convertedColor = toHex(color);
      expect(hexTest(convertedColor) || hex8Test(convertedColor)).toBe(true);
    });
  });

  it('returns a converted color', () => {
    expect(toHex(blue.rgb)).toBe(blue.hex);
    expect(toHex(blue.rgba)).toBe(blue.hex8);
    expect(toHex(blue.hex)).toBe(blue.hex);
    expect(toHex(blue.hex8)).toBe(blue.hex8);
    expect(toHex(blue.hsl)).toBe(blue.hex);
    expect(toHex(blue.hsla)).toBe(blue.hex8);
  });

  it('can accept tinyColor objects as an input', () => {
    var tColor = tinyColor('#0000FF');
    expect(toHex(tColor)).toBe(blue.hex);

    tColor.setAlpha(0.5);
    expect(toHex(tColor)).toBe(blue.hex8);
  });

  it('converts to hex8 when color has an alpha channel value', () => {
    var convertedColor = toHex('rgba(23,245,132,.4)');
    expect(hex8Test(convertedColor)).toBe(true);
  });

  it('ignores the alpha value when alphaBypass is set to true', () => {
    expect(toHex(blue.rgb, true)).toBe(blue.hex);
    expect(toHex(blue.rgba, true)).toBe(blue.hex);
    expect(toHex(blue.hex, true)).toBe(blue.hex);
    expect(toHex(blue.hex8, true)).toBe(blue.hex);
    expect(toHex(blue.hsl, true)).toBe(blue.hex);
    expect(toHex(blue.hsla, true)).toBe(blue.hex);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(toHex(color)).toBe(null);
    });
  });
});

// ==================================================

describe('toHex8', () => {
  it('outputs a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof toHex8(color)).toBe('string');
    });
  });

  it('outputs in Hex8 format', () => {
    _.each(validTestColorArray, color => {
      var convertedColor = toHex8(color);
      expect(hexTest(convertedColor) || hex8Test(convertedColor)).toBe(true);
    });
  });

  it('returns a converted color', () => {
    expect(toHex8(blue.rgb)).toBe(blue.hex8);
    expect(toHex8(blue.rgba)).toBe(blue.hex8);
    expect(toHex8(blue.hex)).toBe(blue.hex8);
    expect(toHex8(blue.hex8)).toBe(blue.hex8);
    expect(toHex8(blue.hsl)).toBe(blue.hex8);
    expect(toHex8(blue.hsla)).toBe(blue.hex8);
  });

  it('can accept tinyColor objects as an input', () => {
    var tColor = tinyColor('#0000FF');
    expect(toHex8(tColor)).toBe(blue.hex8);

    tColor.setAlpha(0.5);
    expect(toHex8(tColor)).toBe(blue.hex8);
  });

  it('returns a hex color if alpha is set to max and simplifyAlpha is set to true', () => {
    var convertedColor = toHex8('#FF00FFFF', true);
    expect(hexTest(convertedColor)).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(toHex8(color)).toBe(null);
    });
  });
});

// ==================================================

describe('toRGB', () => {
  it('outputs a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof toRGB(color)).toBe('string');
    });
  });

  it('outputs in RGB format', () => {
    _.each(validTestColorArray, color => {
      var convertedColor = toRGB(color);
      expect(rgbTest(convertedColor) || rgbaTest(convertedColor)).toBe(true);
    });
  });

  it('returns a converted color', () => {
    expect(toRGB(blue.rgb)).toBe(blue.rgb);
    expect(toRGB(blue.rgba)).toBe(blue.rgba);
    expect(toRGB(blue.hex)).toBe(blue.rgb);
    expect(toRGB(blue.hex8)).toBe(blue.rgba);
    expect(toRGB(blue.hsl)).toBe(blue.rgb);
    expect(toRGB(blue.hsla)).toBe(blue.rgba);
  });

  it('can accept tinyColor objects as an input', () => {
    var tColor = tinyColor('#0000FF');
    expect(toRGB(tColor)).toBe(blue.rgb);

    tColor.setAlpha(0.5);
    expect(toRGB(tColor)).toBe(blue.rgba);
  });

  it('converts to RGBA when alpha value is present', () => {
    var convertedColor = toRGB('#f080F090');
    expect(rgbaTest(convertedColor)).toBe(true);
  });

  it('bypasses alpha values when at 100%', () => {
    var convertedColor = toRGB('#09F090FF');
    expect(rgbTest(convertedColor)).toBe(true);
  });

  it('ignores the alpha value when alphaBypass is set to true', () => {
    expect(toRGB(blue.rgb, true)).toBe(blue.rgb);
    expect(toRGB(blue.rgba, true)).toBe(blue.rgb);
    expect(toRGB(blue.hex, true)).toBe(blue.rgb);
    expect(toRGB(blue.hex8, true)).toBe(blue.rgb);
    expect(toRGB(blue.hsl, true)).toBe(blue.rgb);
    expect(toRGB(blue.hsla, true)).toBe(blue.rgb);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(toRGB(color)).toBe(null);
    });
  });
});
