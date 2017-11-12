const tinyColor = require('tinycolor2');
const parseGradientArguments = require('./parseGradientArguments');
const {
  outputOriginalFormat,
  mapAmountOverArray,
} = require('./internalUtilites');
const { fadeOut, lighten, darken } = require('../index');

function buildGradientString(direction = 'to right', colorArray) {
  if (!Array.isArray(colorArray) || colorArray.length < 1) {
    return null;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (!isNaN(direction)) {
    direction += 'deg';
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

function fadeOutGradient(...args) {
  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var { colors, amount, direction } = args;
  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  colors = mapAmountOverArray(colors, amount, (color, itemAmount) => {
    return fadeOut(color, itemAmount);
  });

  return buildGradientString(direction, colors);
}

function lightenGradient(...args) {
  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var { colors, amount, direction } = args;
  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  amount = amount * 100;

  if (amount >= 0) {
    colors = mapAmountOverArray(colors, amount, (color, itemAmount) => {
      return lighten(color, itemAmount);
    });
  } else {
    amount = amount * -1;
    colors = mapAmountOverArray(colors, amount, (color, itemAmount) => {
      return darken(color, itemAmount);
    });
  }

  return buildGradientString(direction, colors);
}

function darkenGradient(...args) {
  args = parseGradientArguments(args);
  if (args === null) {
    return null;
  }

  var { colors, amount, direction } = args;
  if (amount === null) {
    amount = 1;
  }

  if (direction === null) {
    direction = 'to right';
  }

  if (colors.length === 1) {
    colors.push(colors[0]);
  }

  amount = amount * 100;

  if (amount >= 0) {
    colors = mapAmountOverArray(colors, amount, (color, itemAmount) => {
      return darken(color, itemAmount);
    });
  } else {
    amount = amount * -1;
    colors = mapAmountOverArray(colors, amount, (color, itemAmount) => {
      return lighten(color, itemAmount);
    });
  }

  return buildGradientString(direction, colors);
}

module.exports.gradient = gradient;
module.exports.fadeOutGradient = fadeOutGradient;
module.exports.lightenGradient = lightenGradient;
module.exports.darkenGradient = darkenGradient;
