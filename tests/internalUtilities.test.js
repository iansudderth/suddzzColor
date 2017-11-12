import _ from 'lodash';
import tinyColor from 'tinycolor2';
import { getFormat, outputOriginalFormat } from '../src/internalUtilites';
import {
  hexTest,
  hex8Test,
  hslaTest,
  hslTest,
  rgbTest,
  rgbaTest,
} from './formatRegEx';
import { validTestColorArray, invalidColorArray, red } from './testColors';

// ==================================================

describe('getFormat', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      expect(typeof getFormat(color)).toBe('string');
    });
  });

  it('returns null on invalid input', () => {
    _.each(invalidColorArray, color => {
      expect(getFormat(color)).toBe(null);
    });
  });

  it('returns the proper format', () => {
    expect(getFormat(red.hex)).toBe('hex');
    expect(getFormat(red.hex8)).toBe('hex8');
    expect(getFormat(red.hexShort)).toBe('hex');
    expect(getFormat(red.rgb)).toBe('rgb');
    expect(getFormat(red.rgba)).toBe('rgb');
    expect(getFormat(red.hsl)).toBe('hsl');
    expect(getFormat(red.hsla)).toBe('hsl');
    expect(getFormat(red.name)).toBe('name');
  });
});

// ==================================================

describe('outputOriginalFormat', () => {
  it('returns a string', () => {
    _.each(validTestColorArray, color => {
      var tColor = tinyColor(color);
      expect(typeof outputOriginalFormat(tColor)).toBe('string');
    });
  });

  it("returns a string in the color's original format if passed a tinyColor object", () => {
    var tHex = tinyColor(red.hex);
    expect(hexTest(outputOriginalFormat(tHex))).toBeTruthy();

    var tHex8 = tinyColor(red.hex8).setAlpha(0.5);
    expect(hex8Test(outputOriginalFormat(tHex8))).toBeTruthy();

    var tHSL = tinyColor(red.hsl);
    expect(hslTest(outputOriginalFormat(tHSL))).toBeTruthy();

    var tHSLA = tinyColor(red.hsla).setAlpha(0.5);
    expect(hslaTest(outputOriginalFormat(tHSLA))).toBeTruthy();

    var tRGB = tinyColor(red.rgb);
    expect(rgbTest(outputOriginalFormat(tRGB))).toBeTruthy();

    var tRGBA = tinyColor(red.rgba).setAlpha(0.5);
    expect(rgbaTest(outputOriginalFormat(tRGBA))).toBeTruthy();
  });

  it('echos the input in its original format if input is a valid color string and logs a warning', () => {
    _.each(validTestColorArray, color => {
      expect(outputOriginalFormat(color)).toBe(color);
    });
  });

  it('returns null on invalid input and log a warning', () => {
    _.each(invalidColorArray, color => {
      expect(outputOriginalFormat(color)).toBe(null);
    });
  });
});
