# suddzzColor

## High Level Color Toolbox for CSS-in-JSS

suddzzColor is a Color Toolbox for CSS-in-JSS applications, providing an easy interface for common utilities, such as lightening/darkening colors, changing transparencies, and more.

It also includes a set of conversion utilities for easy format conversion where necessary.

suddzzColor is built primarily with the excellent TinyColor package, and is mostly designed to make the TinyColor api easier, and more concise for use in CSS-in-JS solutions, where TinyColor can be a bit verbose and has some pitfalls (outputting 'ff00ff' instead of '#ff00ff' for instance).  suddzzColor is designed to abstract away configuration that is unnecessary for most common use cases.

The core of suddzzColor is based on the Sass color functions, implementing a similar api for almost all functions.

## Basic Usage

Add the package to your project using the git repo

```bash
yarn add https://github.com/iansudderth/suddzzColor.git
```

Import the package into any javascript file.  I recommend using destructured imports for clarity.

```javascript
import {fadeIn, fadeOut, lighten} from 'suddzzColor'
```

The functions are totally agnostic to the CSS-in-JS system, simply taking in strings as arguments and returning strings for most functions.

## Formats

suddzzColor supports several output formats for colors: hex, hex8, rgb, and rgb.  You do not need to specify rgba or hsla, as they will automatically be used if the alpha value is not 1.

When an output format is not specified, the functions will generally try to use the input format as a guide, though will override if colors are transparent.

```javascript
lighten('#f00', 10) //  '#ff3333'

fadeOut('#f00', .5) //  'rgba(255, 0, 0, .5)'
```

Given that most browsers do not support Hex8 notation, functions will only return it as a value if 'hex8' is passed as the output format, and will convert all hex colors to rgba if the alpha value is not 1.

For color property functions, the outputMode argument determines how the results will be formatted, valid options are: decimal, percent, hex, and bytescale.

```javascript
red('#8080FF', 'decimal') // .5
red('#8080FF', 'percent') // 50
red('#8080FF', 'hex') // '80'
red('#8080FF', 'bytescale') // 128
```

## Color Modification

### adjustHue( color , degrees , [outputFormat] )
Adjusts the hue of the color by the given number of degrees.  Can also accept negative numbers. Colors rotate on a 360 degree scale, so 0, 360, 720, etc.. all return the same value.

### saturate( color, amount, [outputFormat] )
Saturates the color by an amount between 0 - 100, representing 0% - 100%.  Negative numbers are the same as calling the `desaturate()` function.

### desaturate( color, amount, [outputFormat] )
Desaturates the color by an amount between 0 - 100, representing 0% - 100%.  Negative numbers are the same as calling the `saturate()` function. Calling this function with an amount of 100 is the same as calling the `greyscale()` function.

### lighten( color, amount, [outputFormat] )
Lightens the color by an amount between 0 - 100, representing 0% - 100%.  Negative numbers are the same as calling the `darken()` function.

### darken( color, amount, [outputFormat] )
Darkens the color by an amount between 0 - 100, representing 0% - 100%.  Negative numbers are the same as calling the `lighten()` function.

### fadeIn( color, amount, [outputFormat] )  /  opacify(...)
Increases the opacity of the color by an amount between 0 - 1. Negative numbers are the same as calling the `fadeOut()` function.  The `opacify()` function is an alias of `fadeIn()`, included to keep the API consistent with SASS.

### fadeOut( color, amount, [outputFormat] )  /  transparentize(...)
Decreases the opacity of the color by an amount between 0 - 1. Negative numbers are the same as calling the `fadeIN()` function.  The `transparentize()` function is an alias of `fadeOut()`, included to keep the API consistent with SASS.

### setAlpha( color, alphaValue [outputFormat] )  /  setOpactity(...)
Sets the alpha (opacity) value of a color to a value between 0 - 1, totally ignoring the previous value.  This function does not accept negative numbers. `setOpacity()` is an alias of `setAlpha()`, included to keep the API consistent with SASS.

### greyscale( color, [outputFormat] )
Converts the color to greyscale.

### complement( color, [outputFormat])
Generates the complementary color.

### invert( color, [weight], [outputFormat] )
Numerically inverts the original color. The `weight` argument sets the weight of the inverted color relative to the old color, the default is 100.

### mix(color1, color2, [weight], [outputFormat])
Mixes the two colors together to create a new color. The `weight` argument sets the relative weight of the first color in the mix.  The default is 50.


## Color Creation & Conversion


### rgb(red, green, blue, [outputFormat] )
Creates a color from red, green, and blue values in bytescale (0 - 255).

### rgba(red, green, blue, alpha, [outputFormat] )
Creates a color from red, green, blue, and alpha values. `red`, `green`, and `blue` are in bytescale (0 - 255), `alpha` is in decimal (0 - 1).

### hsl(hue, saturation, lightness, [outputFormat] )
Creates a color from hue, saturation, and lightness values.  `hue` is in degrees (0 - 360), `saturation` and `lightness` are in decimal (0 - 100).

### hsla(hue, saturation, lightness, alpha [outputFormat] )
Creates a color from hue, saturation, lightness and alpha values.  `hue` is in degrees (0 - 360), `saturation` and `lightness` are in decimal (0 - 100), and `alpha` is in decimal ( 0 - 1).

### toHex( color, [alphaBypass] )
Converts a color to hex notation. If `alphaBypass` is set to `true`, the color will ignore the alpha value of the color, essentially setting it to 1. For compatibility reasons, `alphaBypass` defaults to `true` for `toHex()`

### toHex8( color, [simplifyAlpha] )
Converts a color to hex8 notation.  `simplifyAlpha` will convert a color to normal hex notation if the color's alpha value is 1.

### toRGB( color, [alphaBypass] )
Converts a color to rgb or rgba notation. If `alphaBypass` is set to `true`, the color will ignore the alpha value of the color, essentially setting it to 1. 

### toHSL( color,  [alphaBypass] )
Converts a color to hsl or hsla notation. If `alphaBypass` is set to `true`, the color will ignore the alpha value of the color, essentially setting it to 1. 

## Color Properties

### hue(color)
Returns the hue of the color in degrees (0 - 360)

### saturation( color ,[outputMode] )
Returns the saturation value of the color. `outputMode` defaults to `'decimal'`

### lightness( color ,[outputMode] )
Returns the lightness value of the color. `outputMode` defaults to `'decimal'`

### red( color ,[outputMode] )
Returns the red value of the color. `outputMode` defaults to `'bytescale'`

### green( color ,[outputMode] )
Returns the green value of the color. `outputMode` defaults to `'bytescale'`

### blue( color ,[outputMode] )
Returns the blue value of the color. `outputMode` defaults to `'bytescale'`

### alpha( color ,[outputMode] ) / opacity(...)
Returns the alpha value of the color. `outputMode` defaults to `'decimal'`