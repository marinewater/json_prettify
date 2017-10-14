import { assert } from 'chai';
import * as fs from 'fs';
import { Input } from '../../lib/input';

describe( 'Input', function () {

    describe( 'stdin', function () {

        let stdin: any;

        beforeEach( function() {


            stdin = require( 'mock-stdin' ).stdin();

        });

        afterEach( function () {

            stdin.restore();

        });

        it( 'should read json from stdin', async function () {

            const input = new Input();
            const read = input.read();
            stdin.send( '{"test": "case"}', 'ascii' );
            stdin.send( null );

            assert.strictEqual( await read, '{"test": "case"}' );
            assert.strictEqual( input.json, '{"test": "case"}' );

        });

        it( 'should read an empty string from stdin', async function () {

            const input = new Input();
            const read = input.read();
            stdin.send( '', 'ascii' );
            stdin.send( null );

            assert.strictEqual( await read, '' );
            assert.strictEqual( input.json, '' );

        });

        it( 'should read EOF from stdin', async function () {

            const input = new Input();
            const read = input.read();
            stdin.send( null );

            assert.strictEqual( await read, '' );
            assert.strictEqual( input.json, '' );

        });

        it( 'should read utf8 from stdin', async function () {

            const input = new Input();
            const read = input.read();
            stdin.send( '{"test": "ÄäÖöÜü"}', 'utf8' );
            stdin.send( null );

            assert.strictEqual( await read, '{"test": "ÄäÖöÜü"}' );
            assert.strictEqual( input.json, '{"test": "ÄäÖöÜü"}' );

        });

    });

    describe( 'file', function () {

        before( function ( done ) {

            fs.writeFile( 'test.json', '{"test": "case"}', err => done( err ) );

        });

        after( function ( done ) {

            fs.unlink( 'test.json', err => done( err ) );

        });

        it( 'should read json from a file', async function () {

            const input = new Input( 'test.json' );
            assert.strictEqual( await input.read(), '{"test": "case"}' );

        });

    });

});