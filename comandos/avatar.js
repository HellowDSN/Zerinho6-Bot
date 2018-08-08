module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		user,
		t_guild,
		embed = new Discord.RichEmbed();

		if ( args[ 0 ] && args[ 0 ] === language.avatar_guild ) {
			try {
				t_guild = message.guild;
				if ( t_guild.iconURL ) {
					embed.setAuthor( t_guild.name , t_guild.iconURL );
					embed.setTitle( language.avatar_guild_icon + helper.bracket( t_guild.name , "(" ) );
					embed.setImage( t_guild.iconURL );
					embed.setDescription( language.avatar_guild_InLinkForm + t_guild.iconURL + ".png" );
					embed.setTimestamp();
					embed.setColor( message.member.displayHexColor );
					embed.setFooter( language.CreatedBy );
					message.channel.send( embed );
				} else {
					message.reply( language.avatar_guild_noIcon );
				}
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		} else if ( message.mentions.users.first() ) {
			try {
				user = message.mentions.users.first();
				embed.setAuthor( user.username , user.displayAvatarURL );
				embed.setImage( user.displayAvatarURL );
				embed.setTitle( language.avatar_avatarOf + user.tag );
				embed.setTimestamp();
				embed.setColor( message.member.displayHexColor );
				embed.setFooter( language.CreatedBy );
				message.channel.send( embed );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		} else {
			try {
				let user = message.author;
				embed.setAuthor( user.username, user.displayAvatarURL );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setImage( user.displayAvatarURL );
				embed.setTitle( language.avatar_user_avatar );
				embed.setFooter( language.CreatedBy );
				message.channel.send( embed );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		}
	}
};
