// Conversion function exports

const { toHex, toHex8, toHSL, toRGB } = require('./lib/conversionFunctions');

module.exports.toHex = toHex;
module.exports.toHex8 = toHex8;
module.exports.toHSL = toHSL;
module.exports.toRGB = toRGB;

// HSL function exports

const {
  hsl,
  hsla,
  hue,
  saturation,
  lightness,
  adjustHue,
  saturate,
  desaturate,
  lighten,
  darken,
  greyScale,
  complement,
  invert,
} = require('./lib/HSLfunctions');

module.exports.hsl = hsl;
module.exports.hsla = hsla;
module.exports.hue = hue;
module.exports.saturation = saturation;
module.exports.lightness = lightness;
module.exports.adjustHue = adjustHue;
module.exports.lighten = lighten;
module.exports.darken = darken;
module.exports.saturate = saturate;
module.exports.desaturate = desaturate;
module.exports.greyScale = greyScale;
module.exports.complement = complement;
module.exports.invert = invert;

// RGB function exports

const { rgb, rgba, red, green, blue, mix } = require('./lib/RGBfunctions');

module.exports.rgb = rgb;
module.exports.rgba = rgba;
module.exports.red = red;
module.exports.green = green;
module.exports.blue = blue;
module.exports.mix = mix;

// Opacity function exports

const {
  opacity,
  alpha,
  opacify,
  fadeIn,
  transparentize,
  fadeOut,
  setAlpha,
  setOpacity,
} = require('./lib/opacityFunctions');

module.exports.alpha = alpha;
module.exports.opacity = opacity;
module.exports.opacify = opacify;
module.exports.fadeIn = fadeIn;
module.exports.transparentize = transparentize;
module.exports.fadeOut = fadeOut;
module.exports.setAlpha = setAlpha;
module.exports.setOpacity = setOpacity;
