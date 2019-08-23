"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird = require("bluebird");
const chai_1 = require("chai");
const fs = require("fs");
const stdMocks = require('std-mocks');
const output_1 = require("../../lib/output");
const readFileAsync = bluebird.promisify(fs.readFile);
describe('Output', function () {
    describe('file', function () {
        after(function (done) {
            fs.unlink('test.json', err => done(err));
        });
        it('should write output to a file', async function () {
            const output = new output_1.Output('{"test": "case"}', 'test.json');
            await output.write();
            const file_content = await readFileAsync('test.json');
            chai_1.assert.strictEqual(file_content.toString(), '{"test": "case"}');
        });
    });
    describe('stdout', function () {
        beforeEach(() => stdMocks.use());
        afterEach(() => stdMocks.restore());
        it('should write to stdout', async function () {
            const output = new output_1.Output('{"test": "case"}');
            await output.write();
            chai_1.assert.strictEqual(stdMocks.flush().stdout[0], '{"test": "case"}');
        });
    });
});
//# sourceMappingURL=output.spec.js.map