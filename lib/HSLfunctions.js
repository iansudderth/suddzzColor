const tinyColor = require('tinycolor2');

function hsl(hue, saturation, lightness) {}

function hsla(hue, saturation, lightness, alpha) {}

function hue(color) {}

// decimal, percent, hex
function saturation(color, mode) {}

function lightness(color, mode) {}

function adjustHue(color, degrees) {}

function lighten(color, amount) {}

function darken(color, amount) {}

function saturate(color, amount) {}

function desaturate(color, amount) {}

function greyScale(color) {}

function complement(color) {}

function invert(color, weight) {}

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
