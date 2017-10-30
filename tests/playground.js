const { convertToTinyColor, bypassAlpha } = require('../lib/internalUtilites');
const tinyColor = require('tinycolor2');

// adjustHue('hsl(100, 100%, 50%, .5)', 100);
var color = tinyColor('#ff6699');
// color.spin(100);
console.log(color);
