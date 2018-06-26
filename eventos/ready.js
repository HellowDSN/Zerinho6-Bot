exports.run = function() {
	var chalk = require( "chalk" ),
	config = require( "../config.json" );
    console.log( chalk.green( "Oi " ) + chalk.blue( config.name ) );
};