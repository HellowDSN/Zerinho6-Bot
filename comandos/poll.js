var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		var k = require( "../comandos/avatar.js" ),
		Discord = require( "discord.js" ),
		user = message.author,
		SPELLCARD_DIVISION = message.content.split( " " ).slice( 1 ).join( " " ).split( " | " ); 
		embed = new Discord.RichEmbed();
		
		if ( SPELLCARD_DIVISION[ 0 ] && SPELLCARD_DIVISION[ 1 ] ) { //Eu tenho uns problemas ~zerinho6
			try {
				embed.setAuthor( user.username , user.displayAvatarURL );
				embed.setTimestamp();
				embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
				embed.setColor( message.member.displayHexColor );
				embed.addField( SPELLCARD_DIVISION[ 0 ] , SPELLCARD_DIVISION[ 1 ] );
				message.channel.send( embed ).then( message => {
					message.react( "👍" ).then( message.react( "👎" ) );
				});
			} catch ( e ) {
				k.special( message , message.member , e );
			}
		} 
	},
	description: "Cria uma votação feita de reações.",
	photo: "https://i.imgur.com/B0M9ppp.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }poll Titulo | conteudo`
};
