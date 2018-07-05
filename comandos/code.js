var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var fs = require( "fs" ),
		files = fs.readdirSync( "./comandos/" ),
		Discord = require( "discord.js" ),
		user = message.author,
		helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed();
		
		if ( args[ 0 ] ) {
			if ( files.find( s => args[ 0 ].toLowerCase().includes( s ) ) ) {
				if ( config.premium.find( s => message.author.id === s ) ) {
					fs.readFile( `comandos/${ args[ 0 ] }` , "utf8" , ( err , data ) => {
						try {
							embed.setAuthor( user.username , user.displayAvatarURL );
							embed.setTimestamp();
							embed.setColor( message.member.displayHexColor );
							embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
							embed.setTitle( args[ 0 ] );
							embed.addField( "Codigo", helper.embed( data , "JavaScript" ) ); 
							message.channel.send( embed );
						} catch ( e ) {
							helper.error_message( message , message.member , e );
						}
					});
				} else {
					message.reply( "Você não é um PBU(Premium Bot User)" );
				}
			} else {
				message.reply( "Esse comando não existe" );
			}
		} else {
			message.reply( "Que comando devo mostrar?" );
		}
	},
	description: "Envia o codigo de X comando",
	photo: "https://i.imgur.com/FN177ER.png",
	permission: "PBU(Premium Bot User)",
	use: `${ config.prefixes[ 0 ] }code comando`
};
