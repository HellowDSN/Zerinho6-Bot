/* global Set */
exports.run = function( message ) {
	try {
		const fs = require( "fs" );
		var talkedRecently = new Set(),
		helper = require( "../helper.js" ),
		name,
		Comands,
		Command,
		config = require( "../config.json" );
		
		
		if ( message.channel.type === "dm" || message.author.bot || !message.channel.permissionsFor( this.user.id ).has( "SEND_MESSAGES" ) ) {
			return;
		}
		
	    message.prefix = config.prefixes.find( ( p ) => message.content.toLowerCase().startsWith( p.toLowerCase() ) ) || null; // Obrigado tsu
		var args = message.content.split( " " );
		
		if ( message.prefix && args[ 0 ] ) {
			if ( talkedRecently.has( message.author.id ) ) return;
			talkedRecently.add( message.author.id );
			setTimeout( () => {
				talkedRecently.delete( message.author.id );
				}, 6000 );
			
			name = args[ 0 ].slice( message.prefix.length ).toLowerCase();
			Comands = fs.readdirSync( "./comandos" ).map( ( c ) => c.replace( /.js/gi , "" ).toLowerCase() ),
		    Command = Comands.includes( name ) ? require( `../comandos/${ name }.js` ) : null;
			  
			if ( Command ) {
				if ( config.personal === "yes" && !config.premium.find( s => message.author.id === s ) ) {
					return;
				} else {
					Command.run( this , message , args.slice( 1 ) );
				}
			}
		}
		
	} catch( e ) {
	    console.error( e );
	}
};
