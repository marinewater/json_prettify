import * as fs from 'fs';
import * as process from 'process';


/**
 * Read text from file or stdin
 */
export class Input {

    json: string;
    private readonly _file: string | null;

    /**
     * @param {string|null} [file=null] path to file; leave null to read from stdin
     */
    constructor( file: string | null = null ) {

        this._file = file;

    }

    /**
     * read input stream
     * @returns {Promise<string>}
     */
    async read(): Promise<string> {

        if ( this._file === null ) {
            await this.getStdInput();
        }
        else {
            await this.getFileInput()
        }

        return this.json;

    }

    /**
     * read from file
     */
    private getFileInput(): Promise<void> {

        const _this = this;

        return new Promise( function( resolve, reject ) {

            const input_stream: fs.ReadStream = fs.createReadStream( _this._file );

            let input_data = '';

            input_stream.on( 'data', function ( data: Buffer ) {

                input_data += data.toString();

            });

            input_stream.on( 'err', error => reject( error ) );

            input_stream.on( 'end', function() {

                _this.json = input_data;
                resolve();

            });

        });

    }

    /**
     * read from stdin
     */
    private getStdInput(): Promise<void> {

        const _this = this;

        return new Promise( function( resolve, reject ) {

            const input_stream: NodeJS.ReadStream = process.stdin;

            let input_data = '';

            input_stream.on( 'data', function ( data: Buffer ) {

                input_data += data.toString();

            });

            input_stream.on( 'err', error => reject( error ) );

            input_stream.on( 'end', function() {

                _this.json = input_data;
                resolve();

            });

        });

    }

}