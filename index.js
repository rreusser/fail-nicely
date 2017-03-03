'use strict'

var h = require('h')

module.exports = failNicely

function failNicely (callback, options) {
  options = options || {}

  return function (err, data) {
    if (!err) {
      return callback && callback(data)
    }

    if (err instanceof Error) {
      err = err.name + ': ' + err.message
    } else if (typeof err !== 'string') {
      throw new Error('fail-nicely: Oops! the message must be a String or an Error. How ironic.')
    }

    var zIndex = options.zIndex === undefined ? 9999 : parseInt(options.zIndex)
    var bg = options.bg === undefined ? '#333' : options.bg
    var fg = options.fg === undefined ? '#fff' : options.fg
    var title = options.title === undefined ? 'Sorry!' : options.title
    var fontFamily = options.fontFamily === undefined ? 'Helvetica, Arial, sans-serif' : options.fontFamily
    var position = options.position === undefined ? 'fixed' : options.position
    var invert = options.invert === undefined ? false : !!options.invert

    if (invert) {
      var tmp = fg
      fg = bg
      bg = tmp
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
    }

    var headingStyles = {
      'font-family': fontFamily
    }

    var explanationStyles = {
      'font-family': fontFamily,
      'max-width': '640px',
      'margin-left': 'auto',
      'margin-right': 'auto',
      'line-height': '1.4',
      'padding': '0 15px'
    }

    var containerStyles = {
      'transform': 'translate(0, -50%)',
      'margin-top': '50vh'
    }

    document.body.appendChild(h('div', {style: overlayStyles}, [
      h('div', {style: containerStyles}, [
        h('h1', title, {style: headingStyles}),
        h('p', err, {style: explanationStyles})
      ])
    ]))
  }
}
