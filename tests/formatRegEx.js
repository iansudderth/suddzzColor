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

export {
  hsvFormat,
  hsvaFormat,
  hslFormat,
  hslaFormat,
  hexFormat,
  hex8Format,
  rgbFormat,
  rgbaFormat,
  hsvTest,
  hsvaTest,
  hslTest,
  hslaTest,
  hexTest,
  hex8Test,
  rgbTest,
  rgbaTest,
};
