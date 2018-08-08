module.exports = {
	run: ( bot , message , args , language ) => {
		var helper = require( "../helper.js" ),
		config = require( "../config.json" );

		if ( message.author.id === config.dono ) {
			if ( !args[ 0 ] ) {
				message.channel.send( language.random_NoArgs );
			} else {
				try {
					delete require.cache[ require.resolve( `./${ args[ 0 ] }.js` ) ]
					message.channel.send( language.reload_CommandReseted );
				} catch ( e ) {
					helper.error_message( message , message.member , e );
				}
			}
		} else {
			message.channel.send( language.reload_notOwner );
		}
	}
};
