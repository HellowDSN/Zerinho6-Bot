var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		if ( args[ 0 ] ) {
			try {
				var Discord = require( "discord.js" ),
				user = message.author,
				embed = new Discord.RichEmbed();
				
				embed.setAuthor( user.username, user.displayAvatarURL );
				embed.addField( "** **" , args[ 0 ] );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
				message.channel.send( embed );
			} catch ( e ) {
				var helper = require( "../helper.js" );
				helper.error_message( message , message.member , e );
			}
		}
	},
	description: "Envia uma mensagem em embed",
	photo: "https://i.imgur.com/QGRnvlp.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }embed qualquer coisa`
};
