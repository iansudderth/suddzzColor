const tinyColor = require('tinycolor2');
const flattenDeep = require('lodash/flattenDeep');

function parseValidDirectionString(directionString) {
  directionString = directionString.toLowerCase();
  directionString = directionString.replace(/\s/g, '');

  var degreeTest = /^[0-9]{1,3}deg$/;

  switch (directionString) {
    case 'top':
    case 'totop':
      return 'to top';
    case 'right':
    case 'toright':
      return 'to right';
    case 'bottom':
    case 'tobottom':
      return 'to bottom';
    case 'left':
    case 'toleft':
      return 'to left';
    case 'topright':
    case 'totopright':
      return 'to top right';
    case 'bottomright':
    case 'tobottomright':
      return 'to bottom right';
    case 'bottomleft':
    case 'tobottomleft':
      return 'to bottom left';
    case 'topleft':
    case 'totopleft':
      return 'to top left';
    default: {
      if (degreeTest.test(directionString)) {
        return directionString;
      } else {
        return null;
      }
    }
  }
}

function numberInAmountRange(num) {
  return num >= -1 && num <= 1;
}

function resolveUnclearNumberConflicts(arrOfNumbers) {
  var resolution = {
    amount: null,
    direction: null,
  };

  // seperate numbers to zeros and non-zeros
  var zeros = [];
  var nonZeros = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] === 0) {
      zeros.push(arrOfNumbers[i]);
    } else {
      nonZeros.push(arrOfNumbers[i]);
    }
  }

  // if no non-zero values, set both values to zero and return

  if (nonZeros.length === 0) {
    resolution.amount = 0;
    resolution.direction = 0;
    return resolution;
  }

  // if one or more zero and one or more nonZero, set direction to zero and amount to last value

  if (nonZeros.length > 0 && zeros.length > 0) {
    resolution.amount = nonZeros.slice(-1)[0];
    resolution.direction = 0;
    console.warn(
      'Unclear number values passed in. direction set to 0 and amount set to last value : ',
      resolution.amount,
      '\nRecommend not passing in multiple values between -1 and 1',
    );
    return resolution;
  }

  // if no zeros, use second to last as amount, and last as direction

  var lastTwo = nonZeros.slice(-2);
  console.log(lastTwo);
  resolution.amount = lastTwo[0];
  resolution.direction = lastTwo[1];
  console.warn(
    'Unclear number values passed in, so used last two values. direction set to ',
    resolution.direction,
    ' and amount set to',
    resolution.amount,
    '\nRecommend not passing in multiple values between -1 and 1',
  );
  return resolution;
}

function parseGradientArguments(...gradientFunctionArguments) {
  var gradientArguments = {
    amount: null,
    direction: null,
    colors: [],
  };
  let unclearNumbers = [];
  gradientFunctionArguments = flattenDeep(gradientFunctionArguments);

  var args = gradientFunctionArguments.filter(arg => {
    var parsedColor = tinyColor(arg);
    if (parsedColor.isValid()) {
      gradientArguments.colors.push(parsedColor);
      return false;
    } else {
      return true;
    }
  });

  if (gradientArguments.colors.length < 1) {
    console.error('not enough valid colors');
    return null;
  }

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string') {
      var parsedString = parseValidDirectionString(args[i]);
      if (parsedString) {
        gradientArguments.direction = parsedString;
      } else {
        console.warn('Unclear argument : "', args[i], '" was discarded');
        continue;
      }
    } else if (typeof args[i] === 'number') {
      if (numberInAmountRange(args[i])) {
        unclearNumbers.push(args[i]);
      } else {
        gradientArguments.direction = args[i];
      }
      continue;
    } else {
      console.warn('Unclear argument : "', args[i], '" was discarded');
      continue;
    }
  }

  if (unclearNumbers.length === 1) {
    gradientArguments.amount = unclearNumbers[0];
  }

  if (unclearNumbers.length > 1) {
    var { direction, amount } = resolveUnclearNumberConflicts(unclearNumbers);

    gradientArguments.amount = amount;

    if (gradientArguments.direction === null) {
      gradientArguments.direction = direction;
    }
  }

  if (gradientArguments.direction === null) {
    gradientArguments.direction = 'to right';
  }

  return gradientArguments;
}

module.exports = parseGradientArguments;
