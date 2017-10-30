const tinyColor = require('tinycolor2');
var { toHex, toHex8, toHSL, toRGB } = require('./conversionFunctions');

function getFormat(color) {
  color = convertToTinyColor(color);

  if (!color.isValid()) {
    return null;
  }
  var format = color.getFormat();
  return format;
}

function outputOriginalFormat(color) {
  return parseOutputFormat(color);
}

function convertToTinyColor(color) {
  if (color instanceof tinyColor) {
    return color;
  } else {
    return tinyColor(color);
  }
}

function bypassAlpha(tColor, alphaBypass = false) {
  if (alphaBypass) {
    return tColor.setAlpha(1);
  } else {
    return tColor;
  }
}

// formats = 'hex' 'hex8' 'hsl' 'rgb'
function parseOutputFormat(color, format, fallback) {
  color = convertToTinyColor(color);
  if (!fallback) {
    fallback = getFormat(color);
  }

  if (!format) {
    format = fallback;
  }

  switch (format) {
    case 'hex':
      return toHex(color);
    case 'hex8':
      return toHex8(color);
    case 'hsl':
      return toHSL(color);
    case 'rgb':
      return toRGB(color);
    default:
      return toHex(color);
  }
}

module.exports.getFormat = getFormat;
module.exports.outputOriginalFormat = outputOriginalFormat;
module.exports.bypassAlpha = bypassAlpha;
module.exports.convertToTinyColor = convertToTinyColor;
