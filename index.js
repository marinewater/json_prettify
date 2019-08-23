#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./lib/input");
const json_prettify_1 = require("./lib/json_prettify");
const output_1 = require("./lib/output");
const process = require("process");
const yargs = require("yargs");
async function main() {
    const argv = yargs.usage('Usage: $0 file.json [options] or cat file.json | $0 [options]')
        .command('out', 'out file path')
        .alias('o', 'out')
        .command('spaces', 'amount of spaces for indentation')
        .alias('s', 'spaces')
        .argv;
    const input = new input_1.Input(argv._.length > 0 ? argv._[0] : null);
    const json = await input.read();
    const spaces = parseInt(argv.spaces, 10);
    const output = new output_1.Output(json_prettify_1.jsonPrettify(json, spaces), argv.out);
    await output.write();
}
main()
    .then(() => process.exit(0))
    .catch(function (error) {
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map