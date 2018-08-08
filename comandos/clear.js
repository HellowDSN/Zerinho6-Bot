module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.member.hasPermission( "MANAGE_MESSAGES" ) ) return message.reply( language.User_need_permission + language.clear_permission + language.ToExecute );
		if ( !message.channel.permissionsFor( bot.user.id ).has( "MANAGE_MESSAGES" ) ) return message.reply( language.Bot_need_permission + language.clear_permission + language.ToExecute );

		if ( args[ 0 ] ) {
			if ( !isNaN( parseInt( args[ 0 ] ) ) ) {
				var toDelete = parseInt( args[ 0 ] ),
				helper = require( "../helper.js" );
				if ( toDelete < 100 ) {
					try {
						message.channel.bulkDelete( toDelete + 1 , true );
						toDelete === 1 ? message.channel.send( toDelete + language.clear_message_deleted ) : message.channel.send( toDelete + language.clear_messages_deleted );
					} catch ( e ) {
						helper.error_message( message , message.member , e );
					}
				} else {
					message.reply( language.clear_reachedLimit );
				}
			} else {
				message.reply( language.clear_MustBeNumeral );
			}
		} else {
			message.reply( language.clear_NoArgs );
		}
	}
};
