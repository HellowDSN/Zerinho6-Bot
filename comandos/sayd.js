module.exports = {
	run: ( bot, message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "MANAGE_MESSAGES" ) ) return message.reply( language.Bot_need_permission + language.manage_messages + language.ToExecute );
	    
		var helper = require( "../helper.js" );
		
		if ( args[ 0 ] ) {
			try {
				message.delete();
				message.channel.send( args[ 0 ] );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
		    }
	    } else {
			message.reply( language.NoArgument );
		}
	}
};
