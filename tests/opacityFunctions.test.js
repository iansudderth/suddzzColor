var _ = require('lodash');

var {
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
} = require('./formatRegEx');

var {
  validTestColorArray,
  invalidColorArray,
  red,
  blue,
} = require('./testColors');

var {
  alpha,
  opacify,
  transparentize,
  setAlpha,
} = require('../lib/opacityFunctions');

describe('alpha', () => {
  it('returns a number if no mode is given', () => {
    expect(typeof alpha(red.hex)).toBe('number');
  });

  it('returns the alpha component of a color', () => {
    expect(alpha(red.hex)).toBe(1);
    expect(alpha(red.rgba)).toBe(0.5);
  });

  it('returns a value corresponding to the mode', () => {
    expect(alpha(red.rgba, 'decimal')).toBe(0.5);
    expect(alpha(red.rgba, 'percent')).toBe(50);
    expect(alpha(red.rgba, 'hex')).toBe('80');
    expect(alpha(red.rgba, 'byteScale')).toBe(128);
  });

  it('returns null on an invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(alpha(color)).toBe(null);
    });
  });
});

describe('opacify', () => {
  it('returns a string', () => {
    expect(typeof opacify(red.hex, 50)).toBe('string');
  });

  it('returns a color in its original format if none is given', () => {
    expect(hexTest(opacify('#FF00FF', 0.1))).toBe(true);
    expect(hex8Test(opacify('#FF00FF90', 0.1))).toBe(true);
    expect(hslTest(opacify('hsl(100, 100%, 50%)', 0.1))).toBe(true);
    expect(hslaTest(opacify('hsla(100, 100%, 50%, 0.5)', 0.1))).toBe(true);
    expect(rgbTest(opacify('rgb(255, 0, 0)', 0.1))).toBe(true);
    expect(rgbaTest(opacify('rgba(255, 0, 0, 0.5)', 0.1))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(opacify(color, 0.1)).toBe(null);
    });
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF0f';
    expect(hex8Test(opacify(color, 0.1, 'hex'))).toBe(true);
    expect(hex8Test(opacify(color, 0.1, 'hex8'))).toBe(true);
    expect(rgbaTest(opacify(color, 0.1, 'rgb'))).toBe(true);
    expect(hslaTest(opacify(color, 0.1, 'hsl'))).toBe(true);
  });

  it('increases the opacity based on the given value', () => {
    expect(opacify('rgba(255, 0, 0, 0.5)', 0.1)).toBe('rgba(255, 0, 0, 0.6)');
  });

  it('decreases the opacity if a negative number is passed', () => {
    expect(opacify('rgba(255, 0, 0, 0.5)', -0.1)).toBe('rgba(255, 0, 0, 0.4)');
  });
});

describe('transparentize', () => {
  it('returns a string', () => {
    expect(typeof transparentize(red.hex, 0.5)).toBe('string');
  });

  it('returns a color in its original format if none is given', () => {
    expect(hex8Test(transparentize('#FF00FF', 0.1))).toBe(true);
    expect(hex8Test(transparentize('#FF00FF90', 0.1))).toBe(true);
    expect(hslaTest(transparentize('hsl(100, 100%, 50%)', 0.1))).toBe(true);
    expect(hslaTest(transparentize('hsla(100, 100%, 50%, 0.5)', 0.1))).toBe(
      true,
    );
    expect(rgbaTest(transparentize('rgb(255, 0, 0)', 0.1))).toBe(true);
    expect(rgbaTest(transparentize('rgba(255, 0, 0, 0.5)', 0.1))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(transparentize(color, 0.1)).toBe(null);
    });
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF0f';
    expect(hex8Test(transparentize(color, 0.1, 'hex'))).toBe(true);
    expect(hex8Test(transparentize(color, 0.1, 'hex8'))).toBe(true);
    expect(rgbaTest(transparentize(color, 0.1, 'rgb'))).toBe(true);
    expect(hslaTest(transparentize(color, 0.1, 'hsl'))).toBe(true);
  });

  it('decreases the opacity based on the given value', () => {
    expect(transparentize('rgba(255, 0, 0, 0.5)', 0.1)).toBe(
      'rgba(255, 0, 0, 0.4)',
    );
  });

  it('increases the opacity if a negative number is passed', () => {
    expect(transparentize('rgba(255, 0, 0, 0.5)', -0.1)).toBe(
      'rgba(255, 0, 0, 0.6)',
    );
  });
});

describe('setAlpha', () => {
  it('returns a string', () => {
    expect(typeof transparentize(red.hex, 50)).toBe('string');
  });

  it('returns a color in its original format if none is given', () => {
    expect(hex8Test(setAlpha('#FF00FF', 0.5))).toBe(true);
    expect(hex8Test(setAlpha('#FF00FF90', 0.5))).toBe(true);
    expect(hslaTest(setAlpha('hsl(100, 100%, 50%)', 0.5))).toBe(true);
    expect(hslaTest(setAlpha('hsla(100, 100%, 50%, 0.5)', 0.5))).toBe(true);
    expect(rgbaTest(setAlpha('rgb(255, 0, 0)', 0.5))).toBe(true);
    expect(rgbaTest(setAlpha('rgba(255, 0, 0, 0.5)', 0.5))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(setAlpha(color, 0.5)).toBe(null);
    });
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF0f';
    expect(hex8Test(setAlpha(color, 0.5, 'hex'))).toBe(true);
    expect(hex8Test(setAlpha(color, 0.5, 'hex8'))).toBe(true);
    expect(rgbaTest(setAlpha(color, 0.5, 'rgb'))).toBe(true);
    expect(hslaTest(setAlpha(color, 0.5, 'hsl'))).toBe(true);
  });

  it('sets the alpha value of the color to the given value', () => {
    expect(setAlpha(red.hex, 0.5)).toBe(red.hex8);
  });
});
