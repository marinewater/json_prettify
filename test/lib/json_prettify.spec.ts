import { assert } from 'chai';
import { jsonPrettify } from '../../lib/json_prettify';

describe( 'jsonPrettify', function () {

    it( 'should prettify a javascript object with default indentation', function () {

        assert.strictEqual( jsonPrettify( '{test: \'case\'}' ), '{\n    "test": "case"\n}' );

    });

    it( 'should prettify a javascript object with no indentation', function () {

        assert.strictEqual( jsonPrettify( '{test: \'case\'}', 0 ), '{"test":"case"}' );

    });

    it( 'should prettify a javascript object with 2 space indentation', function () {

        assert.strictEqual( jsonPrettify( '{test: \'case\'}', 2 ), '{\n  "test": "case"\n}' );

    });

    it( 'should prettify JSON with default indentation', function () {

        assert.strictEqual( jsonPrettify( '{"test": "case"}' ), '{\n    "test": "case"\n}' );

    });

    it( 'should throw a SyntaxError for invalid JSON', function () {

        assert.throws( () => jsonPrettify( '{test: \'case\'' ), SyntaxError );

    });

});