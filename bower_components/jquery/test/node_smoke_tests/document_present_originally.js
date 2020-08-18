"use strict";

const { JSDOM } = require( "jsdom" );

const { window } = new JSDOM( "" );

// Pretend the window is a global.
global.window = window;

const ensureJQuery = require( "./lib/ensure_jquery" );
const ensureGlobalNotCreated = require( "./lib/ensure_global_not_created" );
const jQuery = require( "../.." );

ensureJQuery( jQuery );
ensureGlobalNotCreated( module.exports, window );
