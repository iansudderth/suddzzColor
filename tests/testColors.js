const testColorHex = '#FF00FF';
const testColorHexShort = '#3F2';
const testColorHex8 = '#0f920ff0';
const testColorName = 'red';
const testColorRGB = 'rgb(22, 245, 222)';
const testColorRGBA = 'rgba(245, 22, 113, .5)';
const testColorHSL = 'hsl(290, 88%, 80%)';
const testColorHSLA = 'hsla(120,55%, 90%, .9)';

const validTestColorArray = [
  testColorHex,
  testColorHexShort,
  testColorHex8,
  testColorName,
  testColorRGB,
  testColorRGBA,
  testColorHSL,
  testColorHSLA,
];

const invalidColorHex = '#FF00F';
const invalidColorHexShort = '#GF0';
const invalidColorHex8 = '#FAB9CC000';
const invalidColorName = 'blur';
const invalidColorRGB = 'rgb(234, 0)';
const invalidColorRGBA = 'rgba(23, 55, 115, 1.1.)';
const invalidColorHSL = 'hsl(490, 222, 80%)';
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
  hex: '#FF0000',
  hex8: '#FF0000FF',
  hexShort: '#f00',
  name: 'red',
  rgb: 'rgb(255,0,0)',
  rba: 'rgba(255,0,0,1)',
  hsl: 'hsl(0,100%,50%)',
  hsla: 'hsla(0,100%,50%,1)',
};

const blue = {
  hex: '#0000FF',
  hex8: '#0000FFFF',
  hexShort: '#00f',
  name: 'blue',
  rgb: 'rgb(0,0,255)',
  rgba: 'rgba(0,0,255,1)',
  hsl: 'hsl(240,100%, 50%)',
  hsla: 'hsla(240,100%,50%,1)',
};

const green = {
  hex: '#00FF00',
  hex8: '#00FF00FF',
  hexShort: '#0F0',
  name: 'lime',
  rgb: 'rgb(0,255,0)',
  rgba: 'rgba(0,255,0,1)',
  hsl: 'hsl(120, 100%, 50%)',
  hsla: 'hsla(120,100%, 50%, 1)',
};

const white = {
  hex: '#FFFFFF',
  hex8: '#FFFFFFFF',
  hexShort: '#FFF',
  name: 'white',
  rgb: 'rgb(255,255,255)',
  rgba: 'rgba(255,255,255,1)',
  hsl: 'hsl(0, 0%, 100%)',
  hsla: 'hsla(0, 0%, 100%, 1)',
};

const black = {
  hex: '#000000',
  hex8: '#000000FF',
  hexShort: '#000',
  name: 'black',
  rgb: 'rgb(0,0,0)',
  rgba: 'rgba(0,0,0,1)',
  hsl: 'hsl(0, 0%, 0%)',
  hsla: 'hsla(0,0%,0%,1)',
};

module.exports.validTestColorArray = validTestColorArray;
module.exports.testColorHex = testColorHex;
module.exports.testColorHexShort = testColorHexShort;
module.exports.testColorHex8 = testColorHex8;
module.exports.testColorName = testColorName;
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
