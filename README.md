# suddzzColor

## High Level Color Toolbox for CSS-in-JSS

suddzzColor is a Color Toolbox for CSS-in-JSS applications, providing an easy interface for common utilities, such as lightening/darkening colors, changing transparencies, and more.

It also includes a set of conversion utilities for easy format conversion where necessary.

suddzzColor is built primarily with the excellent TinyColor package, and is mostly designed to make the TinyColor api easier, and more concise for use in CSS-in-JS solutions, where TinyColor can be a bit verbose and has some pitfalls (outputting 'ff00ff' instead of '#ff00ff' for instance).  suddzzColor is designed to abstract away configuration that is unnecessary for most common use cases.

The core of suddzzColor is based on the Sass color functions, implementing a similar api for almost all functions.

## Basic Usage

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