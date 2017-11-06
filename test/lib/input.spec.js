"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var fs = require("fs");
var input_1 = require("../../lib/input");
describe('Input', function () {
    describe('stdin', function () {
        var stdin;
        beforeEach(function () {
            stdin = require('mock-stdin').stdin();
        });
        afterEach(function () {
            stdin.restore();
        });
        it('should read json from stdin', function () {
            return __awaiter(this, void 0, void 0, function () {
                var input, read, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            input = new input_1.Input();
                            read = input.read();
                            stdin.send('{"test": "case"}', 'ascii');
                            stdin.send(null);
                            _b = (_a = chai_1.assert).strictEqual;
                            return [4 /*yield*/, read];
                        case 1:
                            _b.apply(_a, [_c.sent(), '{"test": "case"}']);
                            chai_1.assert.strictEqual(input.json, '{"test": "case"}');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should read an empty string from stdin', function () {
            return __awaiter(this, void 0, void 0, function () {
                var input, read, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            input = new input_1.Input();
                            read = input.read();
                            stdin.send('', 'ascii');
                            stdin.send(null);
                            _b = (_a = chai_1.assert).strictEqual;
                            return [4 /*yield*/, read];
                        case 1:
                            _b.apply(_a, [_c.sent(), '']);
                            chai_1.assert.strictEqual(input.json, '');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should read EOF from stdin', function () {
            return __awaiter(this, void 0, void 0, function () {
                var input, read, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            input = new input_1.Input();
                            read = input.read();
                            stdin.send(null);
                            _b = (_a = chai_1.assert).strictEqual;
                            return [4 /*yield*/, read];
                        case 1:
                            _b.apply(_a, [_c.sent(), '']);
                            chai_1.assert.strictEqual(input.json, '');
                            return [2 /*return*/];
                    }
                });
            });
        });
        it('should read utf8 from stdin', function () {
            return __awaiter(this, void 0, void 0, function () {
                var input, read, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            input = new input_1.Input();
                            read = input.read();
                            stdin.send('{"test": "ÄäÖöÜü"}', 'utf8');
                            stdin.send(null);
                            _b = (_a = chai_1.assert).strictEqual;
                            return [4 /*yield*/, read];
                        case 1:
                            _b.apply(_a, [_c.sent(), '{"test": "ÄäÖöÜü"}']);
                            chai_1.assert.strictEqual(input.json, '{"test": "ÄäÖöÜü"}');
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    describe('file', function () {
        before(function (done) {
            fs.writeFile('test.json', '{"test": "case"}', function (err) { return done(err); });
        });
        after(function (done) {
            fs.unlink('test.json', function (err) { return done(err); });
        });
        it('should read json from a file', function () {
            return __awaiter(this, void 0, void 0, function () {
                var input, _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            input = new input_1.Input('test.json');
                            _b = (_a = chai_1.assert).strictEqual;
                            return [4 /*yield*/, input.read()];
                        case 1:
                            _b.apply(_a, [_c.sent(), '{"test": "case"}']);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=input.spec.js.map