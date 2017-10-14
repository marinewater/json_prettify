"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const json_prettify_1 = require("../../lib/json_prettify");
describe('jsonPrettify', function () {
    it('should prettify a javascript object with default indentation', function () {
        chai_1.assert.strictEqual(json_prettify_1.jsonPrettify('{test: \'case\'}'), '{\n    "test": "case"\n}');
    });
    it('should prettify a javascript object with no indentation', function () {
        chai_1.assert.strictEqual(json_prettify_1.jsonPrettify('{test: \'case\'}', 0), '{"test":"case"}');
    });
    it('should prettify a javascript object with 2 space indentation', function () {
        chai_1.assert.strictEqual(json_prettify_1.jsonPrettify('{test: \'case\'}', 2), '{\n  "test": "case"\n}');
    });
    it('should prettify JSON with default indentation', function () {
        chai_1.assert.strictEqual(json_prettify_1.jsonPrettify('{"test": "case"}'), '{\n    "test": "case"\n}');
    });
    it('should throw a SyntaxError for invalid JSON', function () {
        chai_1.assert.throws(() => json_prettify_1.jsonPrettify('{test: \'case\''), SyntaxError);
    });
});
