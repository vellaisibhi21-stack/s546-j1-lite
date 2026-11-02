const test = require('node:test');
const assert = require('node:assert');
const { shout } = require('../shout');

test('shouts the text', () => assert.strictEqual(shout('hi'), 'HI!'));
test('shouts hello by default', () => assert.strictEqual(shout(), 'HELLO!'));
