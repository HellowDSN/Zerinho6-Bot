var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		var formatos = [ "png" , "jpg" , "gif" ],
		k = require( "../comandos/avatar.js" ),
		to_upload = message.attachments,
		user = message.author,
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		imgur = require( "imgur" );
		if ( to_upload.size >= 1 ) {
			if ( formatos.find( s => to_upload.first().url.endsWith( s ) ) ) {
				imgur.uploadUrl( to_upload.first().url ).then(function ( json ) {
					
				   embed.setAuthor( user.username , user.displayAvatarURL );
				    embed.setColor( message.member.displayHexColor );
				    embed.setImage( json.data.link );
				    embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
				    embed.setThumbnail( "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/2000px-Imgur_logo.svg.png");
				    embed.setTitle( ":frame_photo: | A imagem foi enviada com sucesso" );
				    embed.addField( ":link: Link", json.data.link );
				    message.channel.send( embed );
				}).catch(function ( e ) {
					k.special( message , message.member , e );
				})
			} else {
				message.reply( "Apenas são aceitos os formatos: " + formatos.join( " | " ) );
			}
		} else {
			message.reply( "Você tem que enviar uma imagem para eu fazer o upload." );
		}
	},
	description: "Faz o upload da imagem enviada por você para o imgur.",
	photo: "https://i.imgur.com/IQVfCTE.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }upload (envie uma imagem junto com o comando)`
};
