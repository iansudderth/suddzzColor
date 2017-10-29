const hsvFormat = /^hsv\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%\)$/;

const hsvaFormat = /^hsva\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%, ([01]|0\.[0-9]{1,})\)$/;

const hslFormat = /^hsl\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%\)$/;

const hslaFormat = /^hsla\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%, ([01]|0\.[0-9]{1,})\)$/;

const hexFormat = /^#[0-9a-fA-F]{6}$/;

const hex8Format = /^#[0-9a-fA-F]{8}$/;

const rgbFormat = /^rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)$/;

const rgbaFormat = /^rgba\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}, ([01]|0\.[0-9]{1,})\)$/;

function testFromRegEx(reg) {
  return function(testVal) {
    return reg.test(testVal);
  };
}

const hsvTest = testFromRegEx(hsvFormat);
const hsvaTest = testFromRegEx(hsvaFormat);
const hslTest = testFromRegEx(hslFormat);
const hslaTest = testFromRegEx(hslaFormat);
const hexTest = testFromRegEx(hexFormat);
const hex8Test = testFromRegEx(hex8Format);
const rgbTest = testFromRegEx(rgbFormat);
const rgbaTest = testFromRegEx(rgbaFormat);

module.exports.hsvFormat = hsvFormat;
module.exports.hsvaFormat = hsvaFormat;
module.exports.hslFormat = hslFormat;
module.exports.hslaFormat = hslaFormat;
module.exports.hexFormat = hexFormat;
module.exports.hex8Format = hex8Format;
module.exports.rgbFormat = rgbFormat;
module.exports.rgbaFormat = rgbaFormat;

module.exports.hsvTest = hsvTest;
module.exports.hsvaTest = hsvaTest;
module.exports.hslTest = hslTest;
module.exports.hslaTest = hslaTest;
module.exports.hexTest = hexTest;
module.exports.hex8Test = hex8Test;
module.exports.rgbTest = rgbTest;
module.exports.rgbaTest = rgbaTest;
