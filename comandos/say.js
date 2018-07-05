var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( args[ 0 ] ) {
			try {
				message.channel.send( args[ 0 ] );
			} catch ( e ) {
				var helper = require( "../helper.js" );
				helper.error_message( message , message.member , e );
			}
		}
	},
	description: "Faça o bot enviar a mensagem que você quiser.",
	photo: "https://i.imgur.com/zC4IxAZ.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }say mensagem`
};
