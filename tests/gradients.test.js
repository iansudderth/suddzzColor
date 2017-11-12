import tinyColor from 'tinycolor2';
import _ from 'lodash';
import {
  gradient,
  fadeOutGradient,
  lightenGradient,
  darkenGradient,
} from '../src/gradients';

import { red, green, blue } from './testColors';

// ==================================================

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

// ==================================================

describe('fadeOutGradient', () => {
  it('fades a color out by the given amount over the gradient', () => {
    var expectedOutput =
      'linear-gradient(to top, rgb(255, 0, 0), rgba(255, 0, 0, 0.5))';
    expect(fadeOutGradient('rgb(255, 0, 0)', 0.5, 'top')).toBe(expectedOutput);
  });

  it('distributes the fade out over multiple colors if passed', () => {
    var expectedOutput =
      'linear-gradient(to top, rgb(255, 0, 0), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0))';
    expect(fadeOutGradient(red.rgb, green.rgb, blue.rgb, 1, 'top')).toBe(
      expectedOutput,
    );
  });

  it('defaults to 1 if no value is passed', () => {
    var expectedOutput =
      'linear-gradient(to top, rgb(255, 0, 0), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0))';
    expect(fadeOutGradient(red.rgb, green.rgb, blue.rgb, 'top')).toBe(
      expectedOutput,
    );
  });
});

// ==================================================

describe('lightenGradient', () => {
  it('lightens a color in by the given amount over the gradient', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #ff3333)';
    expect(lightenGradient('#ff0000', 0.1, 'top')).toBe(expectedOutput);
  });

  it('distributes the change in over multiple colors if passed', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #33ff33, #6666ff)';
    expect(lightenGradient('#ff0000', '#00ff00', '#0000ff', 0.2, 'top')).toBe(
      expectedOutput,
    );
  });

  it('accepts a negative number to darken', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #00cc00, #000099)';
    expect(lightenGradient('#ff0000', '#00ff00', '#0000ff', -0.2, 'top')).toBe(
      expectedOutput,
    );
  });

  it('defaults to 1 if no value is passed', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #ffffff)';
    expect(lightenGradient('#ff0000', 'top')).toBe(expectedOutput);
  });
});

// ==================================================

describe('darkenGradient', () => {
  it('darkens a color in by the given amount over the gradient', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #cc0000)';
    expect(darkenGradient('#ff0000', 0.1, 'top')).toBe(expectedOutput);
  });

  it('distributes the change in over multiple colors if passed', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #00cc00, #000099)';
    expect(darkenGradient('#ff0000', '#00ff00', '#0000ff', 0.2, 'top')).toBe(
      expectedOutput,
    );
  });

  it('accepts a negative number to lighten', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #33ff33, #6666ff)';
    expect(darkenGradient('#ff0000', '#00ff00', '#0000ff', -0.2, 'top')).toBe(
      expectedOutput,
    );
  });

  it('defaults to 1 if no value is passed', () => {
    var expectedOutput = 'linear-gradient(to top, #ff0000, #000000)';
    expect(darkenGradient('#ff0000', 'top')).toBe(expectedOutput);
  });
});
