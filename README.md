# fail-nicely

> A one-liner to at least explain why things didn't work out

## Example

See demo: [fail-nicely](http://rickyreusser.com/fail-nicely/)

```bash
npm install fail-nicely
```

```javascript
var failNicely = require('fail-nicely');

failNicely('This demo requires WebGL 7 support!', {title: 'Sorry!'});
```

## Usage

#### `require('fail-nicely')(messageOrError[, options])

Appends an overlay to the body element with a short explanation of what happened. Usefulf for making quick and ugly demos a little less ugly. If the first argument is an `Error`, it will use the error's message. If it's a string, that will be the explanation. Options are:

- `bg`: overlay background color (default: `'#333'`)
- `fg`: overlay foreground (text) color (default: `'#fff'`)
- `zIndex`: z-index of the overlay (default: `9999`)
- `title`: heading title (default: `'Sorry!'`)
- `fontFamily`: font family (default: `Helvetica, Arial, sans-serif`)
- `position`: positioning of the overlay element (default: `fixed`)
- `invert`: quick shorthand for swapping the foreground/background colors

**Returns**: Nothing.

# License

&copy; 2016 Ricky Reusser. MIT License.
