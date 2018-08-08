module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.Bot_need_permission + language.manage_guild + language.ToExecute );

		var helper = require( "../helper.js" ),
		nome = message.content.split( " " ).slice( 1 ).join( " " );

		if ( nome ) {
			if ( nome.length < 100 && nome.length > 2 ) {
				try {
					message.guild.setName( nome );
					message.channel.send( language.setName_NowTheGuildNameIs + helper.bold( nome ) );
				} catch ( e ) {
					helper.error_message( message , message.member , e );
				}
			} else {
				message.reply( language.setName_CharactersLimits );
			}
		} else {
			message.reply( language.setName_NoArgs );
		}
	}
};
