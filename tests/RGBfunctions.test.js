var _ = require('lodash');

var { rgb, rgba, red, green, blue, mix } = require('../lib/RGBfunctions');

var {
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
} = require('./formatRegEx');

var { validTestColorArray, invalidColorArray } = require('./testColors');

var testRedRGB = 'rgb(255, 0, 0)';
var testRedRGBA = 'rgba(255, 0, 0, 0.5)';

describe('rgb', () => {
  it('returns a string', () => {
    expect(typeof rgb(10, 200, 30)).toBe('string');
  });

  it('returns a string in the rgb format', () => {
    expect(rgbTest(rgb(20, 30, 40))).toBe(true);
  });

  it('returns an rgb string with the given values', () => {
    expect(rgb(255, 0, 0)).toBe(testRedRGB);
  });

  it('places 0s when an argument is not passed in', () => {
    expect(rgb(255)).toBe(testRedRGB);
  });

  it('returns a color in the given format, or rgb if none is defined', () => {
    expect(hslTest(rgb(255, 0, 0, 'hsl'))).toBe(true);
    expect(hexTest(rgb(255, 0, 0, 'hex'))).toBe(true);
    expect(hex8Test(rgb(255, 0, 0, 'hex8'))).toBe(true);
    expect(rgbTest(rgb(255, 0, 0, 'rgb'))).toBe(true);
  });
});

describe('rgba', () => {
  it('returns a string', () => {
    expect(typeof rgba(10, 200, 30, 0.5)).toBe('string');
  });

  it('returns a string in the rgba format', () => {
    expect(rgbaTest(rgba(20, 30, 40, 0.5))).toBe(true);
  });

  it('returns an rgba string with the given values', () => {
    expect(rgba(255, 0, 0, 0.5)).toBe(testRedRGBA);
  });

  it('places 0s when an argument is not passed in, or a 1 for alpha', () => {
    expect(rgba(255)).toBe(testRedRGB);
  });

  it('returns a color in the given format, or rgb if none is defined', () => {
    expect(hslaTest(rgba(255, 0, 0, 0.5, 'hsl'))).toBe(true);
    // "hex output format reverts to rgba when alpha channel present"
    expect(rgbaTest(rgba(255, 0, 0, 0.5, 'hex'))).toBe(true);
    expect(hex8Test(rgba(255, 0, 0, 0.5, 'hex8'))).toBe(true);
    expect(rgbaTest(rgba(255, 0, 0, 0.5, 'rgb'))).toBe(true);
  });
});

describe('red', () => {
  it('returns a number if no output mode is passed', () => {
    expect(typeof red(testRedRGB)).toBe('number');
  });

  it('returns the red value of a given color', () => {
    expect(red(testRedRGB)).toBe(255);
  });

  it('returns null if invalid color', () => {
    _.each(invalidColorArray, color => {
      expect(red(color)).toBe(null);
    });
  });

  it('returns a value in the given mode, or byteScale if none is passed', () => {
    expect(red(testRedRGB, 'byteScale')).toBe(255);
    expect(red(testRedRGB, 'decimal')).toBe(1);
    expect(red(testRedRGB, 'percent')).toBe(100);
    expect(red(testRedRGB, 'hex')).toBe('ff');
  });
});

describe('green', () => {
  it('returns a number if no output mode is passed', () => {
    expect(typeof green(testRedRGB)).toBe('number');
  });

  it('returns the green value of a given color', () => {
    expect(green(testRedRGB)).toBe(0);
  });

  it('returns null if invalid color', () => {
    _.each(invalidColorArray, color => {
      expect(green(color)).toBe(null);
    });
  });

  it('returns a value in the given mode, or byteScaleInt if none is passed', () => {
    expect(green(testRedRGB, 'byteScale')).toBe(0);
    expect(green(testRedRGB, 'decimal')).toBe(0);
    expect(green(testRedRGB, 'percent')).toBe(0);
    expect(green(testRedRGB, 'hex')).toBe('00');
  });
});

describe('blue', () => {
  it('returns a number if no output mode is passed', () => {
    expect(typeof red(testRedRGB)).toBe('number');
  });

  it('returns the blue value of a given color', () => {
    expect(blue(testRedRGB)).toBe(0);
  });

  it('returns null if invalid color', () => {
    _.each(invalidColorArray, color => {
      expect(blue(color)).toBe(null);
    });
  });

  it('returns a value in the given mode, or byteScaleInt if none is passed', () => {
    expect(blue(testRedRGB, 'byteScale')).toBe(0);
    expect(blue(testRedRGB, 'decimal')).toBe(0);
    expect(blue(testRedRGB, 'percent')).toBe(0);
    expect(blue(testRedRGB, 'hex')).toBe('00');
  });
});

describe('mix', () => {
  it('returns a string', () => {
    expect(typeof mix('#ff0000', '#00ff00')).toBe('string');
  });

  it('returns a string in the format of the first argument if no mode is passed', () => {
    expect(hexTest(mix('#ff0000', '#00ff00'))).toBe(true);
  });

  it('returns a color in the chosen format if a mode is passed', () => {
    expect(hslTest(mix('#ff0000', '#00ff00', 50, 'hsl'))).toBe(true);
    expect(hexTest(mix('#ff0000', '#00ff00', 50, 'hex'))).toBe(true);
    expect(hex8Test(mix('#ff0000', '#00ff00', 50, 'hex8'))).toBe(true);
    expect(rgbTest(mix('#ff0000', '#00ff00', 50, 'rgb'))).toBe(true);
  });

  it('returns null if the colors are not valid', () => {
    _.each(invalidColorArray, color => {
      expect(mix(color, color)).toBe(null);
    });
  });

  it('returns a mix of the two colors, weighted from the weight argument', () => {
    expect(mix('#f00', '#00f', 50, 'hex')).toBe('#7f007f');
    expect(mix('#f00', '#00f', 25, 'hex')).toBe('#3f00bf');
    expect(mix('rgba(255, 0, 0, 0.5)', '#00f', 50, 'rgba')).toBe(
      'rgba(127, 0, 127, 0.75)',
    );
  });
});
