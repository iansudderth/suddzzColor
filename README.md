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

The functions can be used are totally agnostic to the CSS-in-JS system, simply taking in strings as arguments and returning strings for most functions.

When an output format is not specified, the functions will generally try to use the input format as a guide, though will override if colors are transparent.

```javascript
lighten('#f00', 10) // returns '#ff3333'

fadeOut('#f00', .5) // returns 'rgba(255, 0, 0, .5)'
```

Given that most browsers do not support Hex8 notation, functions will only return it as a value if 'hex8' is passed as the output format, and will convert all hex colors to rgba if the alpha value is not 1.

## Color Modification

### adjustHue( color , degrees , [outputFormat] )

### saturate( color, amount, [outputFormat] )

### desaturate( color, amount, [outputFormat] )

### lighten( color, amount, [outputFormat] )

### darken( color, amount, [outputFormat] )

### fadeIn( color, amount, [outputFormat] )  /  opacify(...)

### fadeOut( color, amount, [outputFormat] )  /  transparentize(...)

### setAlpha( color, alphaValue [outputFormat] )  /  setOpactity(...)

### greyscale( color, [outputFormat] )

### complement( color, [outputFormat])

### invert( color, [weight], [outputFormat] )

### mix(color1, color2, [weight], [outputFormat])



## Color Creation & Conversion



### rgb(red, green, blue, [outputFormat] )

### rgba(red, green, blue, alpha, [outputFormat] )

### hsl(hue, saturation, lightness, [outputFormat] )

### hsla(hue, saturation, lightness, alpha [outputFormat] )

### toHex( color, [alphaBypass] )

### toHex8( color, [simplifyAlpha] )

### toRGB( color, [alphaBypass] )

### toHSL( color,  [alphaBypass] )



## Color Properties

### hue(color)

### saturation( color ,[outputMode] )

### lightness( color ,[outputMode] )

### red( color ,[outputMode] )

### green( color ,[outputMode] )

### blue( color ,[outputMode] )

### alpha( color ,[outputMode] ) / opacity(...)