const tinyColor = require('tinycolor2');

function rgb(red = 0, green = 0, blue = 0, mode = 'rgb') {}

function rgba(red = 0, green = 0, blue = 0, alpha = 1, mode = 'rgba') {}

// outputMode  =  decimal, percent, hex, byteScale
function red(color, outputMode = 'byteScale') {}

function green(color, outputMode = 'byteScale') {}

function blue(color, outputMode = 'byteScale') {}

function mix(color1, color2, weight = 50, mode) {}

module.exports.rgb = rgb;
module.exports.rgba = rgba;
module.exports.red = red;
module.exports.green = green;
module.exports.blue = blue;
module.exports.mix = mix;
