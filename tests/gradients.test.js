const tinyColor = require('tinycolor2');
const _ = require('lodash');
const {
  gradient,
  fadeGradient,
  lightenGradient,
  darkenGradient,
} = require('../lib/gradients');

describe('gradient', () => {
  var expectedGradient = 'linear-gradient(to top, #ff0000, #ffff00)';

  it('should return a valid linear gradient string', () => {
    expect(gradient('top', ['#f00', '#ff0'])).toBe(expectedGradient);
  });

  it('should accept a direction and array of colors', () => {
    expect(gradient('top', ['#f00', '#ff0'])).toBe(expectedGradient);
  });

  it('should accept multiple color arguments', () => {
    expect(gradient('top', '#f00', '#ff0')).toBe(expectedGradient);
  });

  it('should work whether the direction comes first or last', () => {
    expect(gradient('#f00', '#ff0', 'top')).toBe(expectedGradient);
  });

  it('should return null if no colors are passed', () => {
    expect(gradient('top')).toBe(null);
  });

  it('should repeat the color if only one color is passed', () => {
    var expectedOutput = 'linear-gradient(to right, #ff0000, #ff0000)';
    var gradientOutput = gradient('to right', '#ff0000');
    expect(gradientOutput).toBe(expectedOutput);
  });

  it('should default to "to right" if no direction is passed', () => {
    var expectedOutput = 'linear-gradient(to right, #ff0000, #ffff00)';
    var gradientOutput = gradient('#ff0000', '#ffff00');

    expect(gradientOutput).toBe(expectedOutput);
  });
});

describe('fadeGradient', () => {});

describe('lightenGradient', () => {});

describe('darkenGradient', () => {});
