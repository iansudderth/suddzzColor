const tinyColor = require('tinycolor2');
var convert = require('./conversionFunctions');

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
  const formatArray = ['hex', 'hex8', 'hsl', 'rgb'];
  color = convertToTinyColor(color);
  if (!fallback) {
    fallback = getFormat(color);
  }

  if (formatArray.indexOf(fallback) == -1) {
    fallback = 'hex';
  }

  if (!format || formatArray.indexOf(format) == -1) {
    format = fallback;
  }

  switch (format) {
    case 'hex':
      return convert.toHex(color);
    case 'hex8':
      return convert.toHex8(color);
    case 'hsl':
      return convert.toHSL(color);
    case 'rgb':
      return convert.toRGB(color);
    default:
      return convert.toHex(color);
  }
}

function convertByteScale(num, mode = 'decimal') {
  if (mode === 'decimal') {
    return num / 255;
  } else if (mode === 'percent') {
    return num / 2.55;
  } else if (mode === 'hex') {
    var output = num.toString(16);
    if (output.length === 1) {
      output = '0' + output;
    }
    return output;
  } else {
    return num;
  }
}

function convertDecimal(num, mode = 'percent') {
  if (mode === 'decimal') {
    return num;
  } else if (mode === 'percent') {
    return Math.round(num * 100);
  } else if (mode === 'hex') {
    var output = Math.round(num * 255);
    output = output.toString(16);
    if (output.length === 1) {
      output = '0' + output;
    }
    return output;
  } else if (mode === 'byteScale') {
    return Math.round(num * 255);
  } else {
    return num;
  }
}

module.exports.getFormat = getFormat;
module.exports.outputOriginalFormat = outputOriginalFormat;
module.exports.bypassAlpha = bypassAlpha;
module.exports.convertToTinyColor = convertToTinyColor;
module.exports.parseOutputFormat = parseOutputFormat;
module.exports.convertByteScale = convertByteScale;
module.exports.convertDecimal = convertDecimal;
