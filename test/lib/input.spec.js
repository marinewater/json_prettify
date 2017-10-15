"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs = require("fs");
const input_1 = require("../../lib/input");
describe('Input', function () {
    describe('stdin', function () {
        let stdin;
        beforeEach(function () {
            stdin = require('mock-stdin').stdin();
        });
        afterEach(function () {
            stdin.restore();
        });
        it('should read json from stdin', async function () {
            const input = new input_1.Input();
            const read = input.read();
            stdin.send('{"test": "case"}', 'ascii');
            stdin.send(null);
            chai_1.assert.strictEqual(await read, '{"test": "case"}');
            chai_1.assert.strictEqual(input.json, '{"test": "case"}');
        });
        it('should read an empty string from stdin', async function () {
            const input = new input_1.Input();
            const read = input.read();
            stdin.send('', 'ascii');
            stdin.send(null);
            chai_1.assert.strictEqual(await read, '');
            chai_1.assert.strictEqual(input.json, '');
        });
        it('should read EOF from stdin', async function () {
            const input = new input_1.Input();
            const read = input.read();
            stdin.send(null);
            chai_1.assert.strictEqual(await read, '');
            chai_1.assert.strictEqual(input.json, '');
        });
        it('should read utf8 from stdin', async function () {
            const input = new input_1.Input();
            const read = input.read();
            stdin.send('{"test": "ÄäÖöÜü"}', 'utf8');
            stdin.send(null);
            chai_1.assert.strictEqual(await read, '{"test": "ÄäÖöÜü"}');
            chai_1.assert.strictEqual(input.json, '{"test": "ÄäÖöÜü"}');
        });
    });
    describe('file', function () {
        before(function (done) {
            fs.writeFile('test.json', '{"test": "case"}', err => done(err));
        });
        after(function (done) {
            fs.unlink('test.json', err => done(err));
        });
        it('should read json from a file', async function () {
            const input = new input_1.Input('test.json');
            chai_1.assert.strictEqual(await input.read(), '{"test": "case"}');
        });
    });
});
//# sourceMappingURL=input.spec.js.map