import tinyColor from 'tinycolor2';
import {
  parseOutputFormat,
  convertToTinyColor,
  convertByteScale,
  convertDecimal,
  getFormat,
} from './internalUtilites';

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

export {
  alpha,
  opacity,
  opacify,
  fadeIn,
  transparentize,
  fadeOut,
  setAlpha,
  setOpacity,
};
