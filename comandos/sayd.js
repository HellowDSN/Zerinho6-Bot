var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "MANAGE_MESSAGES" ) ) return message.reply( "Eu preciso da permissão de gerenciar mensagens para executar esse comando." );
	    if ( args[ 0 ] ) {
			try {
				message.delete();
			    message.channel.send( args[ 0 ] );
		    } catch ( e ) {
				var k = require( "../comandos/avatar.js" );
				k.special( message , message.member , e );
		    }
	    }
	},
	description: "Faça o bot enviar a mensagem que você quiser, mas ele vai deletar a mensagem que você utilizou para executar o comando.",
	photo: "https://i.imgur.com/a6tQBXE.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }say mensagem`
};