var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		var argument = message.content.split( " " ).slice( 1 ).join( " " );
		
		if ( !message.channel.permissionsFor( bot.user.id ).has( "MANAGE_MESSAGES" ) ) return message.reply( "Eu preciso da permissão de gerenciar mensagens para executar esse comando." );
		
		if ( argument ) {
			try {
				message.delete();
				message.channel.send( argument );
			} catch ( e ) {
				var helper = require( "../helper.js" );
				helper.error_message( message , message.member , e );
			}
		} else {
			message.reply( "O que diabo eu devo dizer?" );
		}
	},
	description: "Faça o bot enviar a mensagem que você quiser, mas ele vai deletar a mensagem que você utilizou para executar o comando.",
	photo: "https://i.imgur.com/a6tQBXE.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }say mensagem`
};
