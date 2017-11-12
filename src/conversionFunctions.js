import { convertToTinyColor, bypassAlpha } from './internalUtilites';
import tinyColor from 'tinycolor2';

function toHSL(color, alphaBypass = false) {
  color = convertToTinyColor(color);
  if (color.isValid()) {
    color = bypassAlpha(color, alphaBypass);
    return color.toHslString();
  } else {
    return null;
  }
}

function toHex(color, alphaBypass = true) {
  color = convertToTinyColor(color);
  if (color.isValid()) {
    color = bypassAlpha(color, alphaBypass);
    if (color.getAlpha() !== 1) {
      return color.toHex8String();
    } else {
      return color.toHexString();
    }
  } else {
    return null;
  }
}

function toHex8(color, simplifyAlpha = false) {
  color = convertToTinyColor(color);
  if (color.isValid()) {
    if (simplifyAlpha) {
      if (color.getAlpha() == 1) {
        return color.toHexString();
      }
    } else {
      return color.toHex8String();
    }
  } else {
    return null;
  }
}

function toRGB(color, alphaBypass = false) {
  color = convertToTinyColor(color);
  if (color.isValid()) {
    color = bypassAlpha(color, alphaBypass);
    return color.toRgbString();
  } else {
    return null;
  }
}

module.exports.toHSL = toHSL;
module.exports.toHex = toHex;
module.exports.toHex8 = toHex8;
module.exports.toRGB = toRGB;

export { toHSL, toHex, toHex8, toRGB };
