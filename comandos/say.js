var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		var argument = message.content.split( " " ).slice( 1 ).join( " " );
		
		if ( argument ) {
			try {
				message.channel.send( argument );
			} catch ( e ) {
				var helper = require( "../helper.js" );
				helper.error_message( message , message.member , e );
			}
		} else {
			message.reply( "O que diabos eu devo dizer?" );
		}
	},
	description: "Faça o bot enviar a mensagem que você quiser.",
	photo: "https://i.imgur.com/zC4IxAZ.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }say mensagem`
};
