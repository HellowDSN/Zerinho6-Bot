var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Você precisa da permissão de gerenciar servidor para executar esse comando." );
                if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Eu preciso da permissão de gerenciar servidor para executar esse comando." );
		var k = require( "../comandos/avatar.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author,
		formatos = [ "png" , "jpg" , "gif" ],
		imagem = message.attachments;
		
		if ( imagem.size >= 1 ) {
			if ( formatos.find( s => imagem.first().url.endsWith( s ) ) ) {
				try {
					message.guild.setIcon( imagem.first().url );
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTimestamp();
					embed.setColor( message.member.displayHexColor );
					embed.setThumbnail( imagem.first().url );
					embed.setTitle( "O icone do servidor foi alterado." );
					embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
					message.channel.send( embed );
				} catch ( e ) {
					k.special( message , message.member , e );
				}
			} else {
				message.reply( "Apenas são aceitos os formatos: " + formatos.join( " | " ) + "." );
			}
		} else {
			message.reply( "Você deve enviar a imagem que vai ser feita de icone do servidor." );
		}
	},
	description: "Altera o icone do servidor.",
	photo: "https://i.imgur.com/z2Ex7Ch.png",
	permission: "MANAGE_GUILD",
	use: `${ config.prefixes[ 0 ] }set-icon (envie a imagem que vai ser feita de icone do servidor)`
};
