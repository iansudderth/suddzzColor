const testColorHex = '#ff00ff';
const testColorHex8 = '#0f920ff0';
const testColorRGB = 'rgb(22, 245, 222)';
const testColorRGBA = 'rgba(245, 22, 113, 0.5)';
const testColorHSL = 'hsl(290, 88%, 80%)';
const testColorHSLA = 'hsla(120, 55%, 90%, 0.9)';

const validTestColorArray = [
  testColorHex,
  testColorHex8,
  testColorRGB,
  testColorRGBA,
  testColorHSL,
  testColorHSLA,
];

const invalidColorHex = '#FF00F';
const invalidColorHexShort = '#GF0';
const invalidColorHex8 = '#FAB9CC000';
const invalidColorName = 'blur';
const invalidColorRGB = 'rgb(284, G0, AA';
const invalidColorRGBA = 'rgba(23, 55, FF, 1.1.';
const invalidColorHSL = 'hsl(490, F2, 80)';
const invalidColorHSLA = 'hsla(320, 11, .5)';

const invalidColorArray = [
  invalidColorHex,
  invalidColorHexShort,
  invalidColorHex8,
  invalidColorName,
  invalidColorRGB,
  invalidColorRGBA,
  invalidColorHSL,
  invalidColorHSLA,
];

const red = {
  hex: '#ff0000',
  hex8: '#ff000080',
  hex8FullAlpha: '#ff0000ff',
  hexShort: '#f00',
  name: 'red',
  rgb: 'rgb(255, 0, 0)',
  rgba: 'rgba(255, 0, 0, 0.5)',
  hsl: 'hsl(0, 100%, 50%)',
  hsla: 'hsla(0, 100%, 50%, 0.5)',
};

const blue = {
  hex: '#0000ff',
  hex8: '#0000ff80',
  hex8FullAlpha: '#0000ffff',
  hexShort: '#00f',
  name: 'blue',
  rgb: 'rgb(0, 0, 255)',
  rgba: 'rgba(0, 0, 255, 0.5)',
  hsl: 'hsl(240, 100%, 50%)',
  hsla: 'hsla(240, 100%, 50%, 0.5)',
};

const green = {
  hex: '#00ff00',
  hex8: '#00ff0080',
  hex8FullAlpha: '#00ff00ff',
  hexShort: '#0f0',
  name: 'lime',
  rgb: 'rgb(0, 255, 0)',
  rgba: 'rgba(0, 255, 0, 0.5)',
  hsl: 'hsl(120, 100%, 50%)',
  hsla: 'hsla(120, 100%, 50%, 0.5)',
};

const white = {
  hex: '#ffffff',
  hex8: '#ffffff80',
  hex8FullAlpha: '#ffffffff',
  hexShort: '#fff',
  name: 'white',
  rgb: 'rgb(255, 255, 255)',
  rgba: 'rgba(255, 255, 255, 0.5)',
  hsl: 'hsl(0, 0%, 100%)',
  hsla: 'hsla(0, 0%, 100%, 0.5)',
};

const black = {
  hex: '#000000',
  hex8: '#00000080',
  hex8FullAlpha: '#000000ff',
  hexShort: '#000',
  name: 'black',
  rgb: 'rgb(0, 0, 0)',
  rgba: 'rgba(0, 0, 0, 0.5)',
  hsl: 'hsl(0, 0%, 0%)',
  hsla: 'hsla(0, 0%, 0%, 0.5)',
};

module.exports.validTestColorArray = validTestColorArray;
module.exports.testColorHex = testColorHex;
module.exports.testColorHex8 = testColorHex8;
module.exports.testColorRGB = testColorRGB;
module.exports.testColorRGBA = testColorRGBA;
module.exports.testColorHSL = testColorHSL;
module.exports.testColorHSL = testColorHSL;

module.exports.invalidColorHex = invalidColorHex;
module.exports.invalidColorHexShort = invalidColorHexShort;
module.exports.invalidColorHex8 = invalidColorHex8;
module.exports.invalidColorName = invalidColorName;
module.exports.invalidColorRGB = invalidColorRGB;
module.exports.invalidColorRGBA = invalidColorRGBA;
module.exports.invalidColorHSL = invalidColorHSL;
module.exports.invalidColorHSLA = invalidColorHSLA;
module.exports.invalidColorArray = invalidColorArray;

module.exports.red = red;
module.exports.blue = blue;
module.exports.green = green;
module.exports.white = white;
module.exports.black = black;
