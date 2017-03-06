# fail-nicely

> A one-liner to at least explain why things didn't work out

## Example

See demo: [fail-nicely](http://rickyreusser.com/fail-nicely/)

```bash
npm install fail-nicely
```

```javascript
var createHandler = require('fail-nicely');

var handleFailure = createHandler(onSuccess, {title: 'Sorry!'});

function onSuccess (message) {
  console.log(message);
}

// Execute the callback with a failure:
handleFailure('This demo requires WebGL 7 support!');

// Execute the onSuccess callback:
handleFailure(null, 'Loaded successfully!');
```

You can also just pass it an error:

```javascript
try {
  var y = 7 + g;
} catch (e) {
  handlerFailure(e);
}
```

The factory pattern is just a little convoluted, but the upshot is that intercepting fatal errors becomes a simple one-liner:

```javascript
var fs = require('fs')
fs.readFile('test.json', createHandler(function (data) {
  console.log('loaded data:', data)
}))
```


## Usage

#### `require('fail-nicely')(callback[, options])`

Returns a node-style callback (`function (err, data)`) that intercepts and handlers errors and otherwise forwards data through to `callback`.

When `err` is truthy, appends an overlay to the body element with a short explanation of what happened. Usefulf for making quick and ugly demos a little less ugly. If the first argument is an `Error`, it will use the error's message. If it's a string, that will be the explanation. Options are:

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
