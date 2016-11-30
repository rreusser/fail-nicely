'use strict';

var h = require('h');

module.exports = failNicely;

function failNicely (msg, options) {
  if (msg instanceof Error) {
    msg = msg.name + ': ' + msg.message;
  } else if (typeof msg !== 'string') {
    throw new Error('fail-nicely: Oops! the message must be a String or an Error. How ironic.');
  }

  options = options || {};
  var zIndex = options.zIndex === undefined ? 9999 : parseInt(options.zIndex);
  var bg = options.bg === undefined ? '#333' : options.bg;
  var fg = options.fg === undefined ? '#fff' : options.fg;
  var title = options.title === undefined ? 'Sorry!' : options.title;
  var fontFamily = options.fontFamily === undefined ? 'Helvetica, Arial, sans-serif' : options.fontFamily;
  var position = options.position === undefined ? 'fixed' : options.position;
  var invert = options.invert === undefined ? false : !!options.invert;

  if (invert) {
    var tmp = fg;
    fg = bg;
    bg = tmp;
  }

  var overlayStyles = {
    position: position,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    'background-color': bg,
    color: fg,
    'text-align': 'center',
    'z-index': zIndex
  };

  var headingStyles = {
    'font-family': 'Helvetica, Arial, sans-serif',
  }

  var explanationStyles = {
    'font-family': 'Helvetica, Arial, sans-serif',
  }

  var containerStyles = {
    'transform': 'translate(0, -50%)',
    'margin-top': '50vh'
  };

  document.body.appendChild(h('div', {style: overlayStyles}, [
    h('div', {style: containerStyles}, [
      h('h1', title, {style: headingStyles}),
      h('p', msg, {style: explanationStyles})
    ])
  ]));
}
