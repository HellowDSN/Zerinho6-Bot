module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		
		const Discord = require( "discord.js" ),
		imgur = require( "imgur" );
		var helper = require( "../helper.js" ),
		user = message.author,
		embed = new Discord.RichEmbed();
		
		if ( helper.get_image( message , true ) ) {
			var imagem = helper.get_image( message, false );
			
			imgur.uploadUrl( imagem ).then( function ( json ) {
				embed.setAuthor( user.username , user.displayAvatarURL );
				embed.setColor( message.member.displayHexColor );
				embed.setImage( json.data.link );
				embed.setFooter( language.CreatedBy );
				embed.setThumbnail( language.upload_imgurLogo );
				embed.setTitle( language.upload_imageUploaded );
				embed.addField( language.upload_link , json.data.link );
				message.channel.send( embed );
			}).catch( function ( e ) {
				helper.error_message( message , message.member , e );
			});
		} else {
			message.reply( language.upload_ImageNoDetected );
		}
	}
};
