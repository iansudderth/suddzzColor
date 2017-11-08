const { invert } = require('../index');

color = '#FF0000';

console.log(invert(color, 0));
console.log(invert(color, 50));
console.log(invert(color, 100));
console.log(invert(color));

color = '#F0A1B9';
console.log(invert(color, 50));

color = '#0AA00A';
console.log(invert(color, 50));
