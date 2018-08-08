module.exports = {
	run: ( bot , message , args , language ) => {

		function int_or_float( type, max ) {
			if ( type === language.random_int ) {
				return language.random_Result + parseInt( Math.random() * max );
			}
			if ( type === language.random_float ) {
				var transformed = parseFloat( max );
				return language.random_float + Math.random() * transformed;
			}
		}

		var helper = require( "../helper.js" );
		if ( args[ 0 ] && args[ 1 ] ) {
			if ( !isNaN( args[ 0 ] ) ) {
				if ( args[ 1 ].toLowerCase() === language.random_int || args[ 1 ].toLowerCase() === language.random_float ) {
					try {
						message.channel.send( int_or_float( args[ 1 ] , args[ 0 ] ) );
					} catch ( e ) {
						helper.error_message( message , message.member , e );
					}
				} else {
					message.reply( language.random_TheOnlyOptionsAreIntOrFloat );
				}
			} else {
				message.reply( language.random_NoNumeral );
			}
		} else if ( args [ 0 ] ) {
			if ( !isNaN( args[ 0 ] ) ) {
				try {
					message.reply( language.random_NoIntOrFloat );
					message.channel.send( language.random_Result + parseInt( Math.random() * args[ 0 ] ) );
				} catch ( e ) {
					helper.error_message( message , message.member , e );
				}
			}
		} else {
			try {
				message.reply( language.random_NoMaxMult );
				message.channel.send( language.random_Result + parseInt( Math.random() * 100 ) );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		}
	}
};
