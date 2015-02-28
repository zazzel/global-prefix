/*!
 * global-prefix <https://github.com/jonschlinkert/global-prefix>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var prefix = require('./');

describe('prefix', function () {
  it('should:', function () {
    assert(prefix == '/usr/local');
  });
});
