const test = require('node:test');
const assert = require('node:assert');
const { reverse } = require('../reverse');

test('reverses the text', () => assert.strictEqual(reverse('abc'), 'cba'));
test('reverses an empty string by default', () => assert.strictEqual(reverse(), ''));
