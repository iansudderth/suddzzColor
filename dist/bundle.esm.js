import tinyColor from 'tinycolor2';
import flattenDeep from 'lodash/flattenDeep';

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

function bypassAlpha(tColor) {
  var alphaBypass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (alphaBypass) {
    return tColor.setAlpha(1);
  } else {
    return tColor;
  }
}

// formats = 'hex' 'hex8' 'hsl' 'rgb'
function parseOutputFormat(color, format, fallback) {
  var formatArray = ['hex', 'hex8', 'hsl', 'rgb'];
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
      
    case 'hsl':
      return toHSL(color);
    case 'rgb':
      return toRGB(color);
    default:
      return toHex(color);
  }
}

function convertByteScale(num) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'decimal';

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

function convertDecimal(num) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'percent';

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

  return arr.map(function (item, i) {
    var itemAmount = factor(i) * amount;
    return callback(item, itemAmount);
  });
}

function toHSL(color) {
  var alphaBypass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  color = convertToTinyColor(color);
  if (color.isValid()) {
    color = bypassAlpha(color, alphaBypass);
    return color.toHslString();
  } else {
    return null;
  }
}

function toHex(color) {
  var alphaBypass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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

function toHex8(color) {
  var simplifyAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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

function toRGB(color) {
  var alphaBypass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

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

function hsl() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var saturation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var lightness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hsl';

  var newColor = tinyColor({ h: hue, s: saturation, l: lightness });
  return parseOutputFormat(newColor, mode, 'hsl');
}

function hsla() {
  var hue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var saturation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var lightness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var mode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'hsl';

  var newColor = tinyColor({ h: hue, s: saturation, l: lightness });
  newColor.setAlpha(alpha);
  return parseOutputFormat(newColor, mode, 'hsl');
}

function hue(color) {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var hueValue = color.toHsl().h;
  return Math.round(hueValue);
}

// outputMode  =  decimal, percent, hex, byteScale
function saturation(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'percent';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var saturationValue = color.toHsl().s;
  return convertDecimal(saturationValue, outputMode);
}

function lightness(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'percent';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var lightnessValue = color.toHsl().l;
  return convertDecimal(lightnessValue, outputMode);
}

// formats = 'hex' 'hex8' 'hsl' 'rgb'
function adjustHue(color) {
  var degrees = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  color.spin(degrees);
  return parseOutputFormat(color, outputFormat);
}

function lighten(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (amount >= 0) {
    if (amount > 100) {
      amount = 100;
    }
    color.lighten(amount);
  } else {
    if (amount < -100) {
      amount = -100;
    }
    color.darken(amount * -1);
  }

  return parseOutputFormat(color, outputFormat);
}

function darken(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (amount >= 0) {
    if (amount > 100) {
      amount = 100;
    }
    color.darken(amount);
  } else {
    if (amount < -100) {
      amount = -100;
    }
    color.lighten(amount * -1);
  }

  return parseOutputFormat(color, outputFormat);
}

function saturate(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (amount >= 0) {
    if (amount > 100) {
      amount = 100;
    }
    color.saturate(amount);
  } else {
    if (amount < -100) {
      amount = -100;
    }
    color.desaturate(amount * -1);
  }

  return parseOutputFormat(color, outputFormat);
}

function desaturate(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (amount >= 0) {
    if (amount > 100) {
      amount = 100;
    }
    color.desaturate(amount);
  } else {
    if (amount < -100) {
      amount = -100;
    }
    color.saturate(amount * -1);
  }

  return parseOutputFormat(color, outputFormat);
}

function greyScale(color, outputFormat) {
  color = convertToTinyColor(color);
  color.greyscale();

  return parseOutputFormat(color, outputFormat);
}

function complement(color, outputFormat) {
  color = convertToTinyColor(color);

  if (!color.isValid()) {
    return null;
  }
  var format = getFormat(color);
  var complement = color.complement();

  return parseOutputFormat(complement, outputFormat, format);
}

function invert(color) {
  var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }

  var alpha = color._a;
  var format = getFormat(color);

  var newColor = {
    r: 255 - color._r,
    g: 255 - color._g,
    b: 255 - color._b
  };

  var originalColorWeight = (100 - weight) / 100;
  weight = weight / 100;

  var outputColor = {
    r: Math.round(newColor.r * weight + color._r * originalColorWeight),
    g: Math.round(newColor.g * weight + color._g * originalColorWeight),
    b: Math.round(newColor.b * weight + color._b * originalColorWeight)
  };

  if (alpha != 1) {
    outputColor.a = alpha;
  }

  outputColor = tinyColor(outputColor);
  return parseOutputFormat(outputColor, outputFormat, format);
}

function rgb() {
  var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var outputFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rgb';

  var newColor = tinyColor({ r: red, g: green, b: blue });
  return parseOutputFormat(newColor, outputFormat, 'rgb');
}

function rgba() {
  var red = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var green = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var blue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var alpha = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var outputFormat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgba';

  var newColor = tinyColor({ r: red, g: green, b: blue, a: alpha });
  return parseOutputFormat(newColor, outputFormat, 'rgb');
}

// outputMode  =  decimal, percent, hex, byteScale
function red(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'byteScale';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._r, outputMode);
}

function green(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'byteScale';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._g, outputMode);
}

function blue(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'byteScale';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._b, outputMode);
}

function mix(color1, color2) {
  var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
  var mode = arguments[3];

  color1 = convertToTinyColor(color1);
  color2 = convertToTinyColor(color2);

  if (typeof weight !== 'number') {
    return null;
  }

  if (weight > 100) {
    weight = 100;
  }

  if (weight < 0) {
    weight = 0;
  }

  if (!color1.isValid() || !color2.isValid()) {
    return null;
  }

  if (!mode) {
    mode = color1.getFormat();
  }

  var color1Weight = weight / 100;
  var color2Weight = (100 - weight) / 100;

  var colorValues = {
    r: Math.floor(color1._r * color1Weight) + Math.floor(color2._r * color2Weight),
    g: Math.floor(color1._g * color1Weight) + Math.floor(color2._g * color2Weight),
    b: Math.floor(color1._b * color1Weight) + Math.floor(color2._b * color2Weight)
  };

  if (color1._a != 1 || color2._a != 1) {
    colorValues.a = color1._a * color1Weight + color2._a * color2Weight;
  } else {
    colorValues.a = 1;
  }

  var mixedColor = tinyColor(colorValues);
  return parseOutputFormat(mixedColor, mode, 'rgb');
}

// outputMode  =  decimal, percent, hex, byteScale
function alpha(color) {
  var outputMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'decimal';

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var alpha = color._a;
  return convertDecimal(alpha, outputMode);
}

var opacity = alpha;

function opacify(color) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var alpha = color._a;
  alpha = alpha + amount;
  if (alpha > 1) {
    alpha = 1;
  }

  if (alpha < 0) {
    alpha = 0;
  }
  color.setAlpha(alpha);

  return parseOutputFormat(color, outputFormat);
}

var fadeIn = opacify;

function transparentize(color, amount, outputFormat) {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var alpha = color._a;
  alpha = alpha - amount;
  if (alpha > 1) {
    alpha = 1;
  }

  if (alpha < 0) {
    alpha = 0;
  }
  color.setAlpha(alpha);

  return parseOutputFormat(color, outputFormat);
}

var fadeOut = transparentize;

function setAlpha(color) {
  var alphaValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var outputFormat = arguments[2];

  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }

  if (alphaValue > 1) {
    alphaValue = 1;
  }

  if (alphaValue < 0) {
    alphaValue = 0;
  }
  color.setAlpha(alphaValue);
  return parseOutputFormat(color, outputFormat);
}

var setOpacity = setAlpha;

function parseValidDirectionString(directionString) {
  directionString = directionString.toLowerCase();
  directionString = directionString.replace(/\s/g, '');

  var degreeTest = /^[0-9]{1,3}deg$/;

  switch (directionString) {
    case 'top':
    case 'totop':
      return 'to top';
    case 'right':
    case 'toright':
      return 'to right';
    case 'bottom':
    case 'tobottom':
      return 'to bottom';
    case 'left':
    case 'toleft':
      return 'to left';
    case 'topright':
    case 'totopright':
      return 'to top right';
    case 'bottomright':
    case 'tobottomright':
      return 'to bottom right';
    case 'bottomleft':
    case 'tobottomleft':
      return 'to bottom left';
    case 'topleft':
    case 'totopleft':
      return 'to top left';
    default:
      {
        if (degreeTest.test(directionString)) {
          return directionString;
        } else {
          return null;
        }
      }
  }
}

function numberInAmountRange(num) {
  return num >= -1 && num <= 1;
}

function resolveUnclearNumberConflicts(arrOfNumbers) {
  var resolution = {
    amount: null,
    direction: null
  };

  // seperate numbers to zeros and non-zeros
  var zeros = [];
  var nonZeros = [];
  for (var i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] === 0) {
      zeros.push(arrOfNumbers[i]);
    } else {
      nonZeros.push(arrOfNumbers[i]);
    }
  }

  // if no non-zero values, set both values to zero and return

  if (nonZeros.length === 0) {
    resolution.amount = 0;
    resolution.direction = 0;
    return resolution;
  }

  // if one or more zero and one or more nonZero, set direction to zero and amount to last value

  if (nonZeros.length > 0 && zeros.length > 0) {
    resolution.amount = nonZeros.slice(-1)[0];
    resolution.direction = 0;
    console.warn('Unclear number values passed in. direction set to 0 and amount set to last value : ', resolution.amount, '\nRecommend not passing in multiple values between -1 and 1');
    return resolution;
  }

  // if no zeros, use second to last as amount, and last as direction

  var lastTwo = nonZeros.slice(-2);
  console.log(lastTwo);
  resolution.amount = lastTwo[0];
  resolution.direction = lastTwo[1];
  console.warn('Unclear number values passed in, so used last two values. direction set to ', resolution.direction, ' and amount set to', resolution.amount, '\nRecommend not passing in multiple values between -1 and 1');
  return resolution;
}

function parseGradientArguments() {
  for (var _len = arguments.length, gradientFunctionArguments = Array(_len), _key = 0; _key < _len; _key++) {
    gradientFunctionArguments[_key] = arguments[_key];
  }

  var gradientArguments = {
    amount: null,
    direction: null,
    colors: []
  };
  var unclearNumbers = [];
  gradientFunctionArguments = flattenDeep(gradientFunctionArguments);

  var args = gradientFunctionArguments.filter(function (arg) {
    var parsedColor = tinyColor(arg);
    if (parsedColor.isValid()) {
      gradientArguments.colors.push(parsedColor);
      return false;
    } else {
      return true;
    }
  });

  if (gradientArguments.colors.length < 1) {
    console.error('not enough valid colors');
    return null;
  }

  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      var parsedString = parseValidDirectionString(args[i]);
      if (parsedString) {
        gradientArguments.direction = parsedString;
      } else {
        console.warn('Unclear argument : "', args[i], '" was discarded');
        continue;
      }
    } else if (typeof args[i] === 'number') {
      if (numberInAmountRange(args[i])) {
        unclearNumbers.push(args[i]);
      } else {
        gradientArguments.direction = args[i];
      }
      continue;
    } else {
      console.warn('Unclear argument : "', args[i], '" was discarded');
      continue;
    }
  }

  if (unclearNumbers.length === 1) {
    gradientArguments.amount = unclearNumbers[0];
  }

  if (unclearNumbers.length > 1) {
    var _resolveUnclearNumber = resolveUnclearNumberConflicts(unclearNumbers),
        direction = _resolveUnclearNumber.direction,
        amount = _resolveUnclearNumber.amount;

    gradientArguments.amount = amount;

    if (gradientArguments.direction === null) {
      gradientArguments.direction = direction;
    }
  }

  if (gradientArguments.direction === null) {
    gradientArguments.direction = 'to right';
  }

  return gradientArguments;
}

function buildGradientString() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'to right';
  var colorArray = arguments[1];

  if (!Array.isArray(colorArray) || colorArray.length < 1) {
    return null;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (!isNaN(direction)) {
    direction += 'deg';
  }

  var gradientString = 'linear-gradient(';
  gradientString += direction;
  gradientString += ', ';

  if (colorArray.length === 1) {
    gradientString += colorArray[0] + ', ' + colorArray[0];
  } else {
    for (var i = 0; i < colorArray.length; i++) {
      gradientString += colorArray[i];

      if (i !== colorArray.length - 1) {
        gradientString += ', ';
      }
    }
  }

  gradientString += ')';

  return gradientString;
}

function gradient() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args = parseGradientArguments(args);
  if (!args) {
    return null;
  }

  var colorsArray = args.colors.map(function (color) {
    return outputOriginalFormat(color);
  });
  var direction = null;
  //   if direction is present, use it
  if (args.direction) {
    direction = args.direction;
    //   if no direction present, use amount
  } else if (args.amount) {
    direction = args.amount;
  }

  return buildGradientString(direction, colorsArray);
}

function fadeOutGradient() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var _args = args,
      colors = _args.colors,
      amount = _args.amount,
      direction = _args.direction;

  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  colors = mapAmountOverArray(colors, amount, function (color, itemAmount) {
    return fadeOut(color, itemAmount);
  });

  return buildGradientString(direction, colors);
}

function lightenGradient() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var _args2 = args,
      colors = _args2.colors,
      amount = _args2.amount,
      direction = _args2.direction;

  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  amount = amount * 100;

  if (amount >= 0) {
    colors = mapAmountOverArray(colors, amount, function (color, itemAmount) {
      return lighten(color, itemAmount);
    });
  } else {
    amount = amount * -1;
    colors = mapAmountOverArray(colors, amount, function (color, itemAmount) {
      return darken(color, itemAmount);
    });
  }

  return buildGradientString(direction, colors);
}

function darkenGradient() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var _args3 = args,
      colors = _args3.colors,
      amount = _args3.amount,
      direction = _args3.direction;

  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  amount = amount * 100;

  if (amount >= 0) {
    colors = mapAmountOverArray(colors, amount, function (color, itemAmount) {
      return darken(color, itemAmount);
    });
  } else {
    amount = amount * -1;
    colors = mapAmountOverArray(colors, amount, function (color, itemAmount) {
      return lighten(color, itemAmount);
    });
  }

  return buildGradientString(direction, colors);
}

// Conversion function exports

// HSL function exports

// RGB function exports

// Opacity function exports

// Gradient functions

export { toHex, toHex8, toHSL, toRGB, hsl, hsla, hue, saturation, lightness, adjustHue, saturate, desaturate, lighten, darken, greyScale, complement, invert, rgb, rgba, red, green, blue, mix, opacity, alpha, opacify, fadeIn, transparentize, fadeOut, setAlpha, setOpacity, gradient, fadeOutGradient, darkenGradient, lightenGradient };
