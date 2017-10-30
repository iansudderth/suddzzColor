const tinyColor = require('tinycolor2');
const {
  parseOutputFormat,
  convertToTinyColor,
  convertByteScale,
  convertDecimal,
  getFormat,
} = require('./internalUtilites');

// outputMode  =  decimal, percent, hex, byteScale
function alpha(color, outputMode = 'decimal') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var alpha = color._a;
  return convertDecimal(alpha, outputMode);
}

const opacity = alpha;

function opacify(color, amount = 0, outputFormat) {
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

const fadeIn = opacify;

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

const fadeOut = transparentize;

function setAlpha(color, alphaValue = 1, outputFormat) {
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

const setOpacity = setAlpha;

module.exports.alpha = alpha;
module.exports.opacity = opacity;
module.exports.opacify = opacify;
module.exports.fadeIn = fadeIn;
module.exports.transparentize = transparentize;
module.exports.fadeOut = fadeOut;
module.exports.setAlpha = setAlpha;
module.exports.setOpacity = setOpacity;
