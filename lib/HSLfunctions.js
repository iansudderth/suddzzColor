const tinyColor = require('tinycolor2');

function hsl(hue, saturation, lightness) {}

function hsla(hue, saturation, lightness, alpha) {}

function hue(color) {}

// decimal, percent, hex, byteScaleInt
function saturation(color, outputMode) {}

function lightness(color, outputMode) {}

function adjustHue(color, degrees, outputFormat) {}

function lighten(color, amount, outputFormat) {}

function darken(color, amount, outputFormat) {}

function saturate(color, amount, outputFormat) {}

function desaturate(color, amount, outputFormat) {}

function greyScale(color, outputFormat) {}

function complement(color, outputFormat) {}

function invert(color, weight, outputFormat) {}

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
