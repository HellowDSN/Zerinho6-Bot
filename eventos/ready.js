exports.run = function() {
	const chalk = require( "chalk" ),
	moment = require( "moment" ),
	fs = require( "fs" ),
	ini = require( "ini" );
	var helper = require( "../helper.js" ),
	config = require( "../config.json" ),
	language = config.language,
	language = ini.parse( fs.readFileSync( "./languages/" + language + ".ini" , "utf-8" ) );
	
	console.log( chalk.green( language.Hi ) + chalk.blue( config.name ) + "\n" + language.Personal  + chalk.blue( config.personal ) + language.BotName + chalk.blue( config.bot_name ) + "\nPrefixes " + chalk.blue( config.prefixes.join( " , " ) ) );
};
