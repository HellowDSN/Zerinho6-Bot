var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Você precisa da permissão de gerenciar servidor para executar esse comando." );
        if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Eu preciso da permissão de gerenciar servidor para executar esse comando." );
		var k = require( "../comandos/avatar.js" ),
		nome = message.content.split( " " ).slice( 1 ).join( " " );
		
		if ( nome ) {
			if ( nome.length < 100 ||  nome.length > 2 ) {
				try {
					message.guild.setName( nome );
					message.channel.send( "O nome do servidor agora é: **" + nome + "**." );
				} catch ( e ) {
					k.special( message , message.member , e );
				}
			} else {
				message.reply( "O minimo de caracteres permitido é **2** e o maximo é **100**.");
			}
		} else {
			message.reply( "Você não escreveu qual vai ser o novo nome do servidor." );
		}
	},
	description: "Altera o nome do servidor",
	photo: "https://i.imgur.com/qs6fatE.png",
	permission: "MANAGE_GUILD",
	use: `${ config.prefixes[ 0 ] }set-name blablabla`
};