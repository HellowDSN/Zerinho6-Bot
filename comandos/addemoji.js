var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.member.hasPermission( "MANAGE_EMOJIS" ) ) return message.reply( "Você precisa da permissão de gerenciar emojis para executar esse comando." );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_EMOJIS" ) ) return message.reply( "Eu preciso da permissão de gerenciar_emojis	para executar esse comando." );
		
		if ( args[ 0 ] ) {
			if ( args[ 0 ].length > 2 ) {
				if ( message.attachments.size >= 1 ) {
					var formatos = [ "png" , "jpg" , "gif" ],
					helper = require( "../helper.js" ),
					emoji = message.attachments.first().url;
					if ( formatos.find( s => emoji.endsWith( s ) ) ) {
						if ( emoji.filesize < 256000 ) {
							try {
								message.guild.createEmoji( emoji, args[ 0 ] );
								message.reply( "O emoji foi criado com sucesso. (se você não tiver usado espaços)" );
							} catch ( e ) {
								if ( emoji.endsWith( formatos[ 0 ] ) || emoji.endsWith( formatos[ 1 ] ) ) {
									message.reply( "O servidor provavelmente já tem 50 emojis normais." );
									helper.error_message( message , message.member , e );
								} else {
									message.reply ( "O servidor provavelmente já tem 50 emojis animados." );
									helper.error_message( message , message.member , e );
								}						
							}
						} else {
							message.reply( "O emoji pesa mais de 256000 bytes( ou pesa exatamente 256000), o discord não permite :/" );
						}
					} else {
						message.reply( "Apenas são aceitos os formatos: " + formatos.join( " | " ) );
					}
				} else {
					message.reply( "Você precisa enviar uma imagem para ela ser feita de emoji" );
				}
			} else {
				message.reply( "O nome do emoji deve ter mais de 2 caracteres." );
			}
		} else {
			message.reply( "Você esqueceu de por o nome do emoji, se não sabe utilizar o comando, use o comando de ajuda." );
		}
	},
	description: "Te da a opção de adicionar um emoji no servidor.",
	photo: "https://i.imgur.com/R1BSmUA.png",
	permission : "MANAGE_EMOJIS",
	use: `${ config.prefixes[ 0 ] }emoji nome-do-emoji (Você também deve enviar uma imagem junto para ela ser feita de emoji, coloque _ no lugar de espaços)`
};
