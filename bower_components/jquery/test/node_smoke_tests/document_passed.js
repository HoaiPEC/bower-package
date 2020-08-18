"use strict";

const { JSDOM } = require( "jsdom" );

const { window } = new JSDOM( "" );

const ensureJQuery = require( "./lib/ensure_jquery" );
const ensureGlobalNotCreated = require( "./lib/ensure_global_not_created" );
const jQuery = require( "../.." )( window );

ensureJQuery( jQuery );
ensureGlobalNotCreated( module.exports );
