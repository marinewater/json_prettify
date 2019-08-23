import * as Bluebird from 'bluebird';
import * as fs from 'fs';
import * as process from 'process';

const writeFileAsync = Bluebird.promisify( fs.writeFile );


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
    private async writeToStdout(): Promise<void> {

        return new Bluebird( ( resolve, reject ) => {

            process.stdout.write( `${this._output_data}\n`, ( err ) => {
                if ( err ) {
                    reject( err );
                    return;
                }

                resolve();

            });
        });

    }

    /**
     * write to file
     */
    private async writeToFile(): Promise<{}> {

        return writeFileAsync( this._file, this._output_data );

    }

}