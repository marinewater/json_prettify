import * as fs from 'fs';
import * as process from 'process';
import * as util from "util";

const writeFileAsync = util.promisify( fs.writeFile );


/**
 * Writes output to file or stdout
 */
export class Output {

    private readonly _output_data: string;
    private readonly _file: string | null;

    /**
     * @param {string} output_data data to write
     * @param {string|null} [file=null] path to file; leave null to read from stdout
     */
    constructor( output_data: string, file: string | null = null ) {

        this._output_data = output_data;
        this._file = file;

    }

    /**
     * write to file/stdout
     * @returns {Promise<void>}
     */
    async write(): Promise<void> {

        if ( this._file === null ) {
            this.writeToStdout();
        }
        else {
            await this.writeToFile();
        }

    }

    /**
     * write to stdout
     */
    private writeToStdout(): void {

        process.stdout.write( this._output_data );

    }

    /**
     * write to file
     * @returns {Promise<void>}
     */
    private async writeToFile(): Promise<void> {

        return writeFileAsync( this._file, this._output_data );

    }

}