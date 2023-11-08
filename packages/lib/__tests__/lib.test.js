'use strict';

const lib = require('..');
const assert = require('assert').strict;

assert.strictEqual(lib(), 'Hello from lib');
console.info('lib tests passed');
