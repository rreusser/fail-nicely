'use strict'

var fail = require('../')(function (msg) {
  window.alert(msg)
}, {bg: '#345'})

// This would succeed:
// fail(null, 'success!');

// Fail:
// fail('Oops!')

// Catch an error and fail:
try {
  throw new Error('WebGL 7 or greater is required!')
} catch (e) {
  fail(e)
}
