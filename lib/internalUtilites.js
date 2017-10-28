const tinyColor = require('tinycolor2');

function getFormat(color) {
  var tColor = tinyColor(color);

  if (!tColor.isValid()) {
    return false;
  }

  return tColor.getFormat();
}

function outputOriginalFormat(tColor) {}

module.exports.getFormat = getFormat;
module.exports.outputOriginalFormat = outputOriginalFormat;
