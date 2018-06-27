exports.run = function() {
	var chalk = require( "chalk" ),
	config = require( "../config.json" );
	
	console.log( chalk.green( "Oi " ) + chalk.blue( config.name ) + "\nPessoal: " + chalk.blue( config.personal ) + "\nBot Name: " + chalk.blue( config.bot_name ) + "\nPrefixes " + chalk.blue( config.prefixes.join( ", " ) ) );
};
