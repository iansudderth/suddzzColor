// Conversion function exports

import { toHex, toHex8, toHSL, toRGB } from './src/conversionFunctions';

export { toHex, toHex8, toHSL, toRGB };

// HSL function exports

import {
  hsl,
  hsla,
  hue,
  saturation,
  lightness,
  adjustHue,
  saturate,
  desaturate,
  lighten,
  darken,
  greyScale,
  complement,
  invert,
} from './src/HSLfunctions';

export {
  hsl,
  hsla,
  hue,
  saturation,
  lightness,
  adjustHue,
  saturate,
  desaturate,
  lighten,
  darken,
  greyScale,
  complement,
  invert,
};

// RGB function exports

import { rgb, rgba, red, green, blue, mix } from './src/RGBfunctions';

export { rgb, rgba, red, green, blue, mix };

// Opacity function exports

import {
  opacity,
  alpha,
  opacify,
  fadeIn,
  transparentize,
  fadeOut,
  setAlpha,
  setOpacity,
} from './src/opacityFunctions';

export {
  opacity,
  alpha,
  opacify,
  fadeIn,
  transparentize,
  fadeOut,
  setAlpha,
  setOpacity,
};

// Gradient functions
import {
  gradient,
  fadeOutGradient,
  darkenGradient,
  lightenGradient,
} from './src/gradients';

export { gradient, fadeOutGradient, darkenGradient, lightenGradient };
