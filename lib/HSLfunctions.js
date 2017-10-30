const tinyColor = require('tinycolor2');

function hsl(hue, saturation, lightness) {}

function hsla(hue, saturation, lightness, alpha) {}

function hue(color) {}

// outputMode  =  decimal, percent, hex, byteScale
function saturation(color, outputMode = 'percent') {}

function lightness(color, outputMode = 'percent') {}

// formats = 'hex' 'hex8' 'hsl' 'rgb'
function adjustHue(color, degrees = 0, outputFormat) {}

function lighten(color, amount = 0, outputFormat) {}

function darken(color, amount = 0, outputFormat) {}

function saturate(color, amount = 0, outputFormat) {}

function desaturate(color, amount = 0, outputFormat) {}

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
