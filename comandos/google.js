module.exports = {
	run: ( bot , message , args , language ) => {
		var argument = message.content.split( " " ).slice( 1 ).join( " " );
		const google = require( "google" );

		if ( argument ) {

			google( argument , function ( e , res ) {

				var i = 0,
				helper = require( "../helper.js" );

				if ( e ) {
					message.reply( language.Error+ "\n" + e );
				}

				while ( res.links[ i ] === null ) {
					i++; //Magic.
				}

				if ( res.links[ i ] === undefined ) {
					message.reply( language.google_noResults );
					return;
				}

				message.channel.send( language.google_resultsFor + helper.bold( argument ) + "\n\n" + res.links[ i ].title + "\n" + res.links[ i ].href );

			});

		} else {
			message.reply( language.google_NoArgs );
		}
	}
};
