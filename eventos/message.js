/* global Set */
exports.run = function( message ) {
	try {
		const fs = require( "fs" ),
		ini = require( "ini" );
		var talkedRecently = new Set(),
		helper = require( "../helper.js" ),
		name,
		Comands,
		Command,
		config = require( "../config.json" ),
		database = require( "../database/languages.json" );

		if ( message.channel.type === "dm" || message.author.bot || !message.channel.permissionsFor( this.user.id ).has( "SEND_MESSAGES" ) ) {
			return;
		}
		
		var language = database[ message.guild.id ] ? ini.parse( fs.readFileSync( "./languages/" + database[ message.guild.id ].language + ".ini" , "utf-8" ) ) : ini.parse( fs.readFileSync( "./languages/" + config.language + ".ini" , "utf-8" ) );
		message.prefix = config.prefixes.find( ( p ) => message.content.toLowerCase().startsWith( p.toLowerCase() ) ) || null; // Obrigado tsu
        var args = message.content.split( " " );

		if ( message.prefix && args[ 0 ] ) {
			
			if ( talkedRecently.has( message.author.id ) ) return;
			
			talkedRecently.add( message.author.id );
			setTimeout( () => {
				talkedRecently.delete( message.author.id );
			}, 6000 );

			name = args[ 0 ].slice( message.prefix.length ).toLowerCase();
			Comands = fs.readdirSync( "./comandos" ).map( ( c ) => c.replace( /.js/gi, "" ).toLowerCase() );
			Command = Comands.includes( name ) ? require( `../comandos/${ name }.js` ) : null;
			
			if ( Command ) {
				if ( config.personal === "yes" && !config.premium.find( s => message.author.id === s ) ) {
					return;
				} else {
					Command.run( this , message , args.slice( 1 ) , language );
				}
			}
		}

	} catch( e ) {
	    console.error( e );
	}
};
