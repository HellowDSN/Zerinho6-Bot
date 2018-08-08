module.exports = {
	run: ( bot , message , args , language ) => {
		var helper = require( "../helper.js" );
		
		if ( args[ 0 ] ) {
			try {
				message.channel.send( args[ 0 ] );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
		    }
	    }
	}
};
