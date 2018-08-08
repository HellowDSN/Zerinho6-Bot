module.exports = {
	run:( bot , message , args , language ) => {
		if ( !message.guild.member( bot.user.id ).hasPermission( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		const Discord = require( "discord.js" );
		var embed = new Discord.RichEmbed(),
		user = message.author,
		helper = require( "../helper.js" ),
		permissions_array = [ language.embed_links , language.manage_emojis , language.manage_channels , language.manage_messages , language.ban_members , language.kick_members , language.manage_guild ],
		permissions = {
			"EMBED_LINKS": language.permissionsUse_embedLinks_commands,
			"MANAGE_EMOJIS": language.permissionsUse_manageEmojis_commands,
			"MANAGE_MESSAGES": language.permissionsUse_manageMessages_commands,		//Thanks to daviputary
			"BAN_MEMBERS": language.permissionsUse_banMembers_commands,
			"KICK_MEMBERS": language.permissionsUse_kickMembers_commands,
			"MANAGE_GUILD": language.permissionsUse_manageGuild_commands
		};

		function check( perm ) {
			var emote = message.channel.permissionsFor( bot.user.id ).has( perm ) ? language.permissionsUse_emote_true : language.permissionsUse_emote_false;
			return emote + permissions[ perm ];
		}

		embed.setAuthor( user.username, user.displayAvatarURL );
		embed.setTimestamp();
		embed.setColor( message.member.displayHexColor );
		embed.setFooter( language.CreatedBy );
		embed.setTitle( language.permissionsUse_CommandsThatUseSpecialPermissions );
		
		for ( var i = 0 ; i < permissions_array.length ; i++ ) {
			embed.addField( permissions_array[ i ] , check( permissions_array[ i ] ) , true );
		}
		
	    embed.setDescription( language.permissionsUse_DescriptionExplanation );
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	}
};
