import { assert } from 'chai';
import * as fs from 'fs';
import * as util from "util";
const stdMocks = require( 'std-mocks' );
import { Output } from '../../lib/output';

const readFileAsync = util.promisify( fs.readFile );

describe( 'Output', function () {

    describe( 'file', function () {

        after( function ( done ) {

            fs.unlink( 'test.json', err => done( err ) );

        });

        it( 'should write output to a file', async function () {

            const output = new Output( '{"test": "case"}', 'test.json' );
            await output.write();

            const file_content = await readFileAsync( 'test.json' );

            assert.strictEqual( file_content.toString(), '{"test": "case"}' );

        });

    });

    describe( 'stdout', function () {

        beforeEach( () => stdMocks.use() );
        afterEach( () => stdMocks.restore() );

        it( 'should write to stdout', async function () {

            const output = new Output( '{"test": "case"}' );
            await output.write();

            assert.strictEqual( stdMocks.flush(), '{"test": "case"}' );

        });

    });

});