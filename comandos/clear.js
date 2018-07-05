var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.member.hasPermission( "MANAGE_MESSAGES" ) ) return message.reply( "Você precisa da permissão de gerenciar mensagens para executar esse comando." );
		if ( !message.channel.permissionsFor( bot.user.id ).has( "MANAGE_MESSAGES" ) ) return message.reply( "Eu preciso da permissão de gerenciar mensagens para executar esse comando." );
		
		if ( args[ 0 ] ) {
			if ( !isNaN( parseInt( args[ 0 ] ) ) ) {
				var toDelete = parseInt( args[ 0 ] ),
				helper = require( "../helper.js" );
				if ( toDelete < 100 ) {
					try {
						message.channel.bulkDelete( toDelete + 1 , true );
						toDelete === 1 ? message.channel.send( toDelete + " mensagem foi deletada." ) : message.channel.send( toDelete + " mensagens foram deletadas." ); 
					} catch ( e ) {
						helper.error_message( message , message.member , e );
					}
				} else {
					message.reply( "A quantidade no qual eu devo deletar deve ser menos de 100." );
				}
			} else {
				message.reply( "A quantidade de mensagens que eu devo deletar deve ser em numeral." );
			}
		} else {
			message.reply( "Apagar quantas mensagens? Se não sabe usar o comando, use o comando de ajuda." );
		}  
	},
	description: "Apaga X mensagem(ns).",
	photo: "https://i.imgur.com/At2fPJE.png",
	permission: "MANAGE_MESSAGES",
	use: `${ config.prefixes[ 0 ] }clear numero_de_mensagens_para_deletar`
};
