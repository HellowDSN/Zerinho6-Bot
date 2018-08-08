module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.Bot_need_permission + language.manage_guild + language.ToExecute );
		
		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author;

		if ( helper.get_image( message , true ) ) {
			var imagem = helper.get_image( message , false );
				try {
					message.guild.setIcon( imagem );
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTimestamp();
					embed.setColor( message.member.displayHexColor );
					embed.setThumbnail( imagem );
					embed.setTitle( language.setIcon_IconChanged );
					embed.setFooter( language.CreatedBy );
					message.channel.send( embed );
				} catch ( e ) {
					helper.error_message( message , message.member , e );
				}
		} else {
			message.reply( language.setIcon_NoImage );
		}
	}
};
