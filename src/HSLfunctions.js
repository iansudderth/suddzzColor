import tinyColor from 'tinycolor2';
import {
  parseOutputFormat,
  convertToTinyColor,
  convertByteScale,
  convertDecimal,
  getFormat,
} from './internalUtilites';

function hsl(hue = 0, saturation = 0, lightness = 0, mode = 'hsl') {
  var newColor = tinyColor({ h: hue, s: saturation, l: lightness });
  return parseOutputFormat(newColor, mode, 'hsl');
}

function hsla(hue = 0, saturation = 0, lightness = 0, alpha = 0, mode = 'hsl') {
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
function saturation(color, outputMode = 'percent') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var saturationValue = color.toHsl().s;
  return convertDecimal(saturationValue, outputMode);
}

function lightness(color, outputMode = 'percent') {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }
  var lightnessValue = color.toHsl().l;
  return convertDecimal(lightnessValue, outputMode);
}

// formats = 'hex' 'hex8' 'hsl' 'rgb'
function adjustHue(color, degrees = 0, outputFormat) {
  color = convertToTinyColor(color);
  color.spin(degrees);
  return parseOutputFormat(color, outputFormat);
}

function lighten(color, amount = 0, outputFormat) {
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

function darken(color, amount = 0, outputFormat) {
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

function saturate(color, amount = 0, outputFormat) {
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

function desaturate(color, amount = 0, outputFormat) {
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

function invert(color, weight = 100, outputFormat) {
  color = convertToTinyColor(color);
  if (!color.isValid()) {
    return null;
  }

  var alpha = color._a;
  var format = getFormat(color);

  var newColor = {
    r: 255 - color._r,
    g: 255 - color._g,
    b: 255 - color._b,
  };

  var originalColorWeight = (100 - weight) / 100;
  weight = weight / 100;

  var outputColor = {
    r: Math.round(newColor.r * weight + color._r * originalColorWeight),
    g: Math.round(newColor.g * weight + color._g * originalColorWeight),
    b: Math.round(newColor.b * weight + color._b * originalColorWeight),
  };

  if (alpha != 1) {
    outputColor.a = alpha;
  }

  outputColor = tinyColor(outputColor);
  return parseOutputFormat(outputColor, outputFormat, format);
}

export {
  hsl,
  hsla,
  hue,
  saturation,
  lightness,
  adjustHue,
  lighten,
  darken,
  saturate,
  desaturate,
  greyScale,
  complement,
  invert,
};
