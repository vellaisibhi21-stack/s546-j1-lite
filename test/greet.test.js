const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('../greet');

test('greets by name', () => assert.strictEqual(greet('Ada'), 'Hello, Ada!'));
test('greets the world by default', () => assert.strictEqual(greet(), 'Hello, world!'));
