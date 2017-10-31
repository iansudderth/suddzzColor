const utilities = require('./internalUtilites');
var tinyColor = require('tinycolor2');

function toHSL(color, alphaBypass = false) {
  color = utilities.convertToTinyColor(color);
  if (color.isValid()) {
    color = utilities.bypassAlpha(color, alphaBypass);
    return color.toHslString();
  } else {
    return null;
  }
}

function toHex(color, alphaBypass = true) {
  color = utilities.convertToTinyColor(color);
  if (color.isValid()) {
    color = utilities.bypassAlpha(color, alphaBypass);
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
  color = utilities.convertToTinyColor(color);
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
  color = utilities.convertToTinyColor(color);
  if (color.isValid()) {
    color = utilities.bypassAlpha(color, alphaBypass);
    return color.toRgbString();
  } else {
    return null;
  }
}

module.exports.toHSL = toHSL;
module.exports.toHex = toHex;
module.exports.toHex8 = toHex8;
module.exports.toRGB = toRGB;
