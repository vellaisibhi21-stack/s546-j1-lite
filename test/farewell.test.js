const test = require('node:test');
const assert = require('node:assert');
const { farewell } = require('../farewell');

test('says goodbye by name', () => assert.strictEqual(farewell('Ada'), 'Goodbye, Ada!'));
test('says goodbye to the world by default', () => assert.strictEqual(farewell(), 'Goodbye, world!'));
// Deliberately fails on a workflow's first attempt (acceptance test of "Re-run failed jobs").
test('first-attempt failure', () => assert.notStrictEqual(process.env.GITHUB_RUN_ATTEMPT, '1'));
