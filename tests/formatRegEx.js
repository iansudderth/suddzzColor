const hsvFormat = /^hsv\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%\)$/;

const hsvaFormat = /^hsva\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%, ([01]|0\.[0-9]{1,})\)$/;

const hslFormat = /^hsl\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%\)$/;

const hslaFormat = /^hsla\([0-9]{1,3}, [0-9]{1,3}%, [0-9]{1,3}%, ([01]|0\.[0-9]{1,})\)$/;

const hexFormat = /^#[0-9a-fA-F]{6}$/;

const hex8Format = /^#[0-9a-fA-F]{8}$/;

const rgbFormat = /^rgb\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}\)$/;

const rgbaFormat = /^rgba\([0-9]{1,3}, [0-9]{1,3}, [0-9]{1,3}, ([01]|0\.[0-9]{1,})\)$/;

module.exports.hsvFormat = hsvFormat;
module.exports.hsvaFormat = hsvaFormat;
module.exports.hslFormat = hslFormat;
module.exports.hslaFormat = hslaFormat;
module.exports.hexFormat = hexFormat;
module.exports.hex8Format = hex8Format;
module.exports.rgbFormat = rgbFormat;
module.exports.rgbaFormat = rgbaFormat;
