#!/usr/bin/env node

import { Input } from './lib/input';
import { jsonPrettify } from './lib/json_prettify';
import { Output } from './lib/output';
import * as process from 'process';
import * as yargs from 'yargs';



async function main(): Promise<void> {

    const argv = yargs.usage('Usage: $0 file.json [options] or cat file.json | $0 [options]' )
        .command( 'out', 'out file path' )
        .alias( 'o', 'out' )
        .command( 'spaces', 'amount of spaces for indentation', {
            number: {
                alias: 's',
                default: '4'
            }
        })
        .help('h')
        .alias('h', 'help')
        .argv;

    const input = new Input( argv._.length > 0 ? argv._[ 0 ] : null );
    const json = await input.read();

    let spaces = parseInt( argv.spaces as string, 10 );
    if ( isNaN( spaces ) ) {
        spaces = 4;
    }

    const output = new Output( jsonPrettify( json, spaces ), argv.out as string );
    await output.write();

}

main()
    .then( () => process.exit( 0 ) )
    .catch( function( error ) {

        console.error( error );
        process.exit( 1 );

    });