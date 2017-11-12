import tinyColor from 'tinycolor2';
import { toHex, toHex8, toHSL, toRGB } from './conversionFunctions';

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
    fallback = 'rgb';
  }

  if (!format || formatArray.indexOf(format) == -1) {
    format = fallback;
  }

  if (color._a !== 1 && format == 'hex') {
    format = 'rgb';
  }

  switch (format) {
    case 'hex':
      return toHex(color);
    case 'hex8':
      return toHex8(color);
      ``;
    case 'hsl':
      return toHSL(color);
    case 'rgb':
      return toRGB(color);
    default:
      return toHex(color);
  }
}

function gitByteScale(num, mode = 'decimal') {
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

function mapAmountOverArray(arr, amount, callback) {
  var length = arr.length;
  if (!length > 1) {
    throw 'Array must have 2 or more items';
  }

  function factor(index) {
    return index / (length - 1);
  }

  return arr.map((item, i) => {
    var itemAmount = factor(i) * amount;
    return callback(item, itemAmount);
  });
}

export {
  getFormat,
  outputOriginalFormat,
  bypassAlpha,
  convertToTinyColor,
  parseOutputFormat,
  convertByteScale,
  convertDecimal,
  mapAmountOverArray,
};
