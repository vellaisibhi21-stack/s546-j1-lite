const test = require('node:test');
const assert = require('node:assert');
const { whisper } = require('../whisper');

test('whispers the text', () => assert.strictEqual(whisper('HI'), 'hi...'));
test('whispers hello by default', () => assert.strictEqual(whisper(), 'hello...'));
test('whispers numbers', () => assert.strictEqual(whisper(42), '42...'));
