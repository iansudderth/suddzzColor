const tinyColor = require('tinycolor2');
const parseGradientArguments = require('./parseGradientArguments');
const { outputOriginalFormat } = require('./internalUtilites');

function buildGradientString(direction = 'to right', colorArray) {
  if (!Array.isArray(colorArray) || colorArray.length < 1) {
    return null;
  }

  if (direction === null) {
    direction = 'to right';
  }

  var gradientString = 'linear-gradient(';
  gradientString += direction;
  gradientString += ', ';

  if (colorArray.length === 1) {
    gradientString += colorArray[0] + ', ' + colorArray[0];
  } else {
    for (let i = 0; i < colorArray.length; i++) {
      gradientString += colorArray[i];

      if (i !== colorArray.length - 1) {
        gradientString += ', ';
      }
    }
  }

  gradientString += ')';

  return gradientString;
}

function gradient(...args) {
  args = parseGradientArguments(args);
  if (!args) {
    return null;
  }

  var colorsArray = args.colors.map(color => outputOriginalFormat(color));
  let direction = null;
  //   if direction is present, use it
  if (args.direction) {
    direction = args.direction;
    //   if no direction present, use amount
  } else if (args.amount) {
    direction = args.amount;
  }

  return buildGradientString(direction, colorsArray);
}

function fadeGradient() {
  return null;
}

function lightenGradient() {
  return null;
}

function darkenGradient() {
  return null;
}

module.exports.gradient = gradient;
module.exports.fadeGradient = fadeGradient;
module.exports.lightenGradient = lightenGradient;
module.exports.darkenGradient = darkenGradient;
