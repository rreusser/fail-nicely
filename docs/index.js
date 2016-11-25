'use strict';

try {
  throw new Error('WebGL 7 or greater is required!');
} catch (e) {
  require('../')(e);
}
