"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird = require("bluebird");
const fs = require("fs");
const process = require("process");
const writeFileAsync = bluebird.promisify(fs.writeFile);
/**
 * Writes output to file or stdout
 */
class Output {
    /**
     * @param {string} output_data data to write
     * @param {string|null} [file=null] path to file; leave null to read from stdout
     */
    constructor(output_data, file = null) {
        this._output_data = output_data;
        this._file = file;
    }
    /**
     * write to file/stdout
     * @returns {Promise<void>}
     */
    async write() {
        if (this._file === null) {
            this.writeToStdout();
        }
        else {
            await this.writeToFile();
        }
    }
    /**
     * write to stdout
     */
    writeToStdout() {
        process.stdout.write(this._output_data);
    }
    /**
     * write to file
     * @returns {Promise<void>}
     */
    async writeToFile() {
        return writeFileAsync(this._file, this._output_data, null);
    }
}
exports.Output = Output;
//# sourceMappingURL=output.js.map