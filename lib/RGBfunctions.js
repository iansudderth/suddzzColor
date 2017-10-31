const tinyColor = require('tinycolor2');
const {
  parseOutputFormat,
  convertToTinyColor,
  convertByteScale,
} = require('./internalUtilites');

function rgb(red = 0, green = 0, blue = 0, outputFormat = 'rgb') {
  var newColor = tinyColor({ r: red, g: green, b: blue });
  return parseOutputFormat(newColor, outputFormat, 'rgb');
}

function rgba(red = 0, green = 0, blue = 0, alpha = 1, outputFormat = 'rgba') {
  var newColor = tinyColor({ r: red, g: green, b: blue, a: alpha });
  return parseOutputFormat(newColor, outputFormat, 'rgb');
}

// outputMode  =  decimal, percent, hex, byteScale
function red(color, outputMode = 'byteScale') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._r, outputMode);
}

function green(color, outputMode = 'byteScale') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._g, outputMode);
}

function blue(color, outputMode = 'byteScale') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  return convertByteScale(color._b, outputMode);
}

function mix(color1, color2, weight = 50, mode) {
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
    r:
      Math.floor(color1._r * color1Weight) +
      Math.floor(color2._r * color2Weight),
    g:
      Math.floor(color1._g * color1Weight) +
      Math.floor(color2._g * color2Weight),
    b:
      Math.floor(color1._b * color1Weight) +
      Math.floor(color2._b * color2Weight),
  };

  if (color1._a != 1 || color2._a != 1) {
    colorValues.a = color1._a * color1Weight + color2._a * color2Weight;
  } else {
    colorValues.a = 1;
  }

  var mixedColor = tinyColor(colorValues);
  return parseOutputFormat(mixedColor, mode, 'rgb');
}

module.exports.rgb = rgb;
module.exports.rgba = rgba;
module.exports.red = red;
module.exports.green = green;
module.exports.blue = blue;
module.exports.mix = mix;
