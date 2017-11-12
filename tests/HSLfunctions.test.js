import _ from 'lodash';

import {
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
} from '../src/HSLfunctions';

import {
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
} from './formatRegEx';

import {
  validTestColorArray,
  invalidColorArray,
  red,
  blue,
} from './testColors';

// ==================================================

describe('hsl', () => {
  it('returns a string', () => {
    expect(typeof hsl(230, 100, 30)).toBe('string');
  });

  it('outputs in HSL format', () => {
    expect(hslTest(hsl(300, 100, 50))).toBe(true);
  });

  it('uses 0 as a value when no argument is passed', () => {
    expect(hsl()).toBe('hsl(0, 0%, 0%)');
  });

  it('returns null on invalid input', () => {
    expect(hsl('ABCD', 'things', 'none')).toBe(null);
  });
});

// ==================================================

describe('hsla', () => {
  it('returns a string', () => {
    expect(typeof hsla(230, 100, 30, 0.5)).toBe('string');
  });

  it('outputs in HSLA format', () => {
    expect(hslaTest(hsla(300, 100, 50, 0.2))).toBe(true);
  });

  it('uses 0 as a value when no argument is passed', () => {
    expect(hsla()).toBe('hsla(0, 0%, 0%, 0)');
  });

  it('returns null on invalid input', () => {
    expect(hsl('ABCD', 'things', 'none', 'five')).toBe(null);
  });
});

// ==================================================

describe('hue', () => {
  it('returns a number', () => {
    expect(typeof hue('hsl(0, 100%, 50%)')).toBe('number');
  });

  it('returns a number between 0 and 360', () => {
    _.each(validTestColorArray, color => {
      var colorHue = hue(color);
      expect(colorHue >= 0 && colorHue <= 360).toBe(true);
    });
  });

  it('returns the hue component of a color', () => {
    expect(hue('#FF0000')).toBe(0);
  });

  it('returns null on invalid input', () => {
    expect(hue('AASDADASDASD')).toBe(null);
  });
});

// ==================================================

describe('saturation', () => {
  it('returns a number if no mode is given', () => {
    expect(typeof saturation('#ff0000')).toBe('number');
  });

  it('returns the saturation component of a color', () => {
    expect(saturation(red.hex)).toBe(100);
  });

  it('returns a value corresponding to the mode', () => {
    var color = 'hsl(0,50%,50%)';
    expect(saturation(color, 'decimal')).toBe(0.5);
    expect(saturation(color, 'percent')).toBe(50);
    expect(saturation(color, 'hex')).toBe('80');
    expect(saturation(color, 'byteScale')).toBe(128);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(saturation(color)).toBe(null);
    });
  });
});

// ==================================================

describe('lightness', () => {
  it('returns a number if no mode is given', () => {
    expect(typeof lightness('#ff0000')).toBe('number');
  });

  it('returns a value corresponding to the mode', () => {
    var color = 'hsl(0,50%,50%)';
    expect(lightness(color, 'decimal')).toBe(0.5);
    expect(lightness(color, 'percent')).toBe(50);
    expect(lightness(color, 'hex')).toBe('80');
    expect(lightness(color, 'byteScale')).toBe(128);
  });

  it('returns the lightness component of a color', () => {
    expect(lightness(red.hex)).toBe(50);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(lightness(color)).toBe(null);
    });
  });
});

// ==================================================

describe('adjustHue', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof adjustHue(color, 100)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(adjustHue('#FF00FF', 100))).toBe(true);
    expect(hex8Test(adjustHue('#FF00FF90', 100))).toBe(true);
    expect(hslTest(adjustHue('hsl(100, 100%, 50%)', 100))).toBe(true);
    expect(hslaTest(adjustHue('hsla(100, 100%, 50%, .5)', 100))).toBe(true);
    expect(rgbTest(adjustHue('rgb(255, 0, 0)', 100))).toBe(true);
    expect(rgbaTest(adjustHue('rgba(255, 0, 0, .5)', 100))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(adjustHue(color, 100, 'hex'))).toBe(true);
    expect(hex8Test(adjustHue(color, 100, 'hex8'))).toBe(true);
    expect(rgbTest(adjustHue(color, 100, 'rgb'))).toBe(true);
    expect(hslTest(adjustHue(color, 100, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(adjustHue(color, 'AAA')).toBe(null);
    });
  });

  it('uses 0 if no value is passed', () => {
    expect(adjustHue(red.hex)).toBe(red.hex);
  });

  it('changes the hue based on the given number', () => {
    expect(adjustHue(red.hsl, 240)).toBe(blue.hsl);
    expect(adjustHue(red.hsl, -120)).toBe(blue.hsl);
  });
});

// ==================================================

describe('lighten', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof lighten(color, 10)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(lighten('#FF00FF', 10))).toBe(true);
    expect(hex8Test(lighten('#FF00FF90', 10))).toBe(true);
    expect(hslTest(lighten('hsl(100, 100%, 50%)', 10))).toBe(true);
    expect(hslaTest(lighten('hsla(100, 100%, 50%, .5)', 10))).toBe(true);
    expect(rgbTest(lighten('rgb(255, 0, 0)', 10))).toBe(true);
    expect(rgbaTest(lighten('rgba(255, 0, 0, .5)', 10))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(lighten(color, 10, 'hex'))).toBe(true);
    expect(hex8Test(lighten(color, 10, 'hex8'))).toBe(true);
    expect(rgbTest(lighten(color, 10, 'rgb'))).toBe(true);
    expect(hslTest(lighten(color, 10, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(lighten(color, 'AAA')).toBe(null);
    });
  });

  it('changes the lightness based on the given value', () => {
    expect(lighten('#f00', 10)).toBe('#ff3333');
    expect(lighten('#f0A', 100)).toBe('#ffffff');
  });

  it('darkens the color if a negative number is passed in', () => {
    expect(lighten('#f00', -10)).toBe('#cc0000');
    expect(lighten('#f0a', -100)).toBe('#000000');
  });

  it('returns the original color if no lightness value is passed in', () => {
    expect(lighten(red.hex)).toBe(red.hex);
  });
});

// ==================================================

describe('darken', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof darken(color, 10)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(darken('#FF00FF', 10))).toBe(true);
    expect(hex8Test(darken('#FF00FF90', 10))).toBe(true);
    expect(hslTest(darken('hsl(100, 100%, 50%)', 10))).toBe(true);
    expect(hslaTest(darken('hsla(100, 100%, 50%, .5)', 10))).toBe(true);
    expect(rgbTest(darken('rgb(255, 0, 0)', 10))).toBe(true);
    expect(rgbaTest(darken('rgba(255, 0, 0, .5)', 10))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(darken(color, 10, 'hex'))).toBe(true);
    expect(hex8Test(darken(color, 10, 'hex8'))).toBe(true);
    expect(rgbTest(darken(color, 10, 'rgb'))).toBe(true);
    expect(hslTest(darken(color, 10, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(darken(color, 'AAA')).toBe(null);
    });
  });

  it('changes the darkness based on the given value', () => {
    expect(darken('#f00', 10)).toBe('#cc0000');
    expect(darken('#f0a', 100)).toBe('#000000');
  });

  it('lightens the color if a negative number is passed', () => {
    expect(darken('#f00', -10)).toBe('#ff3333');
    expect(darken('#f0a', -100)).toBe('#ffffff');
  });

  it('returns the original color if no darkness value is passed in', () => {
    expect(darken(red.hex)).toBe(red.hex);
  });
});

// ==================================================

describe('saturate', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof saturate(color, 10)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(saturate('#FF00FF', 10))).toBe(true);
    expect(hex8Test(saturate('#FF00FF90', 10))).toBe(true);
    expect(hslTest(saturate('hsl(100, 100%, 50%)', 10))).toBe(true);
    expect(hslaTest(saturate('hsla(100, 100%, 50%, .5)', 10))).toBe(true);
    expect(rgbTest(saturate('rgb(255, 0, 0)', 10))).toBe(true);
    expect(rgbaTest(saturate('rgba(255, 0, 0, .5)', 10))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(saturate(color, 10, 'hex'))).toBe(true);
    expect(hex8Test(saturate(color, 10, 'hex8'))).toBe(true);
    expect(rgbTest(saturate(color, 10, 'rgb'))).toBe(true);
    expect(hslTest(saturate(color, 10, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(saturate(color, 'AAA')).toBe(null);
    });
  });

  it('changes the saturation based on the given value', () => {
    expect(saturate('hsl(0, 10%, 50%)', 10)).toBe('hsl(0, 20%, 50%)');
  });

  it('desaturates the color if a negative number is passed', () => {
    expect(saturate('#f00', -10)).toBe('#f20d0d');
  });

  it('returns the original color if no saturation value is passed in', () => {
    expect(saturate(red.hex)).toBe(red.hex);
  });
});

// ==================================================

describe('desaturate', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof adjustHue(color, 10)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(desaturate('#FF00FF', 10))).toBe(true);
    expect(hex8Test(desaturate('#FF00FF90', 10))).toBe(true);
    expect(hslTest(desaturate('hsl(100, 100%, 50%)', 10))).toBe(true);
    expect(hslaTest(desaturate('hsla(100, 100%, 50%, .5)', 10))).toBe(true);
    expect(rgbTest(desaturate('rgb(255, 0, 0)', 10))).toBe(true);
    expect(rgbaTest(desaturate('rgba(255, 0, 0, .5)', 10))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(desaturate(color, 10, 'hex'))).toBe(true);
    expect(hex8Test(desaturate(color, 10, 'hex8'))).toBe(true);
    expect(rgbTest(desaturate(color, 10, 'rgb'))).toBe(true);
    expect(hslTest(desaturate(color, 10, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(desaturate(color, 'AAA')).toBe(null);
    });
  });

  it('desaturates the color based on the given value', () => {
    expect(desaturate('#f00', 10)).toBe('#f20d0d');
  });

  it('saturates the color if a negative number is passed', () => {
    expect(desaturate('hsl(0, 10%, 50%)', -10)).toBe('hsl(0, 20%, 50%)');
  });

  it('returns the original color if no saturation value is passed in', () => {
    expect(desaturate(red.hex)).toBe(red.hex);
  });
});

// ==================================================

describe('greyScale', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof greyScale(color)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(greyScale('#FF00FF'))).toBe(true);
    expect(hex8Test(greyScale('#FF00FF90'))).toBe(true);
    expect(hslTest(greyScale('hsl(100, 100%, 50%)'))).toBe(true);
    expect(hslaTest(greyScale('hsla(100, 100%, 50%, .5)'))).toBe(true);
    expect(rgbTest(greyScale('rgb(255, 0, 0)'))).toBe(true);
    expect(rgbaTest(greyScale('rgba(255, 0, 0, .5)'))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(greyScale(color, 'hex'))).toBe(true);
    expect(hex8Test(greyScale(color, 'hex8'))).toBe(true);
    expect(rgbTest(greyScale(color, 'rgb'))).toBe(true);
    expect(hslTest(greyScale(color, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(greyScale(color)).toBe(null);
    });
  });

  it('converts a color to its greyscale', () => {
    expect(greyScale('#f00')).toBe('#808080');
  });
});

// ==================================================

describe('complement', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof complement(color)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(complement('#FF00FF'))).toBe(true);
    expect(hex8Test(complement('#FF00FF90'))).toBe(true);
    expect(hslTest(complement('hsl(100, 100%, 50%)'))).toBe(true);
    expect(hslaTest(complement('hsla(100, 100%, 50%, .5)'))).toBe(true);
    expect(rgbTest(complement('rgb(255, 0, 0)'))).toBe(true);
    expect(rgbaTest(complement('rgba(255, 0, 0, .5)'))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(complement(color, 'hex'))).toBe(true);
    expect(hex8Test(complement(color, 'hex8'))).toBe(true);
    expect(rgbTest(complement(color, 'rgb'))).toBe(true);
    expect(hslTest(complement(color, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(complement(color)).toBe(null);
    });
  });

  it('returns the complement of the color', () => {
    expect(complement('#f00')).toBe('#00ffff');
  });
});

// ==================================================

describe('invert', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof invert(color)).toBe('string');
    });
  });

  it("outputs in it's original format if no format is given", () => {
    expect(hexTest(invert('#FF00FF'))).toBe(true);
    expect(hex8Test(invert('#FF00FF90'))).toBe(true);
    expect(hslTest(invert('hsl(100, 100%, 50%)'))).toBe(true);
    expect(hslaTest(invert('hsla(100, 100%, 50%, .5)'))).toBe(true);
    expect(rgbTest(invert('rgb(255, 0, 0)'))).toBe(true);
    expect(rgbaTest(invert('rgba(255, 0, 0, .5)'))).toBe(true);
  });

  it('outputs in the given format if one is passed', () => {
    var color = '#FF00FF';
    expect(hexTest(invert(color, 100, 'hex'))).toBe(true);
    expect(hex8Test(invert(color, 100, 'hex8'))).toBe(true);
    expect(rgbTest(invert(color, 100, 'rgb'))).toBe(true);
    expect(hslTest(invert(color, 100, 'hsl'))).toBe(true);
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(invert(color)).toBe(null);
    });
  });

  it('returns the invert of the color', () => {
    expect(invert('#ff6699')).toBe('#009966');
  });
});
