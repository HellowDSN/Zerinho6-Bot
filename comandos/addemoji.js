module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.Bot_need_permission + language.manage_guild + language.ToExecute );
		
		if ( args[ 0 ] ) {
			if ( args[ 0 ].length > 2 ) {
				if ( message.attachments.size >= 1 ) {
					var formatos = [ "png" , "jpg" , "gif" ],
					helper = require( "../helper.js" ),
					emoji = message.attachments.first().url; 
					if ( formatos.find( s => emoji.endsWith( s ) ) ) {
						try {
							message.guild.createEmoji( emoji, args[ 0 ] );
							message.reply( language.addemoji_emoji_created );
						} catch ( e ) {
							message.reply( language.addemoji_emoji_noslots );
							helper.error_message( message , message.member , e );
						}	    
					} else {
						message.reply( language.addemoji_emoji_formats );
					}
				} else {
					message.reply( language.addemoji_noImage );
				}
			} else {
				message.reply( language.addemoji_description );
			}
		} else {
			message.reply( language.addemoji_moreArgs );
		}
	}
};
