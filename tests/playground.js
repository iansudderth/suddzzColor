const { mapAmountOverArray } = require('../lib/internalUtilites');
const {
  fadeOutGradient,
  darkenGradient,
  lightenGradient,
} = require('../index');

console.log(lightenGradient('#f00', '#0f0', '#00f', 0.5, 180));
