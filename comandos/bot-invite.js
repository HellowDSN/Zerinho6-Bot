var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author;
		
		if ( args[ 0 ] ) {
			if ( !isNaN( parseInt( args[ 0 ] ) ) ) {
				if ( args[ 0 ].length === 18 ) {
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTimestamp();
					embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
					embed.setColor( message.member.displayHexColor );
					embed.addField( ":link: | Link" , "https://discordapp.com/oauth2/authorize?&client_id=" + args[ 0 ] + "&scope=bot" );
					message.channel.send( embed );
				} else {
					message.reply( "Um ID tem 18 caracteres, eu sei diferenciar" );
				}
		 	} else {
				message.reply( "Isso não é um numero, não é um ID." );
			}
		} else {
			message.reply( "Preciso do ID do bot." );
		}
	},
	description: "Cria o link de convite de um bot especificado",
	photo: "Link da imagem",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }bot-invite ID`
};
