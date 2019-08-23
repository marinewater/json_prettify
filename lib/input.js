"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const process = require("process");
/**
 * Read text from file or stdin
 */
class Input {
    /**
     * @param {string|null} [file=null] path to file; leave null to read from stdin
     */
    constructor(file = null) {
        this._file = file;
    }
    /**
     * read input stream
     * @returns {Promise<string>}
     */
    async read() {
        if (this._file === null) {
            await this.getStdInput();
        }
        else {
            await this.getFileInput();
        }
        return this.json;
    }
    /**
     * read from file
     * @returns {Promise<void>}
     */
    getFileInput() {
        const _this = this;
        return new Promise(function (resolve, reject) {
            const input_stream = fs.createReadStream(_this._file);
            let input_data = '';
            input_stream.on('data', function (data) {
                input_data += data.toString();
            });
            input_stream.on('err', error => reject(error));
            input_stream.on('end', function () {
                _this.json = input_data;
                resolve();
            });
        });
    }
    /**
     * read from stdin
     * @returns {Promise<void>}
     */
    getStdInput() {
        const _this = this;
        return new Promise(function (resolve, reject) {
            const input_stream = process.stdin;
            let input_data = '';
            input_stream.on('data', function (data) {
                input_data += data.toString();
            });
            input_stream.on('err', error => reject(error));
            input_stream.on('end', function () {
                _this.json = input_data;
                resolve();
            });
        });
    }
}
exports.Input = Input;
//# sourceMappingURL=input.js.map