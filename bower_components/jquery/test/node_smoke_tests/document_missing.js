"use strict";

const assert = require( "assert" );
const ensureGlobalNotCreated = require( "./lib/ensure_global_not_created" );
const jQueryFactory = require( "../.." );

assert.throws( () => {
	jQueryFactory( {} );
}, /jQuery requires a window with a document/ );

ensureGlobalNotCreated( module.exports );
