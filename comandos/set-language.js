module.exports = {
	run: ( bot , message , args , language ) => {	
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
	
		const fs = require( "fs" );
		var allowedLanguages = [ "pt-br" , "en" ];
		
		if ( args[ 0 ] ) {
			if ( allowedLanguages.find( language => args[ 0 ] === language ) ) {
				
				const database = JSON.parse( fs.readFileSync( "./database/languages.json" , "utf8" ) );

				if ( !database[ message.guild.id ] ) {
					database[ message.guild.id ] = {
						language: args[ 0 ]
					}
				} else {
					database[ message.guild.id ].language = args[ 0 ];
				}
				
				fs.writeFile( "./database/languages.json" , JSON.stringify( database ), ( err ) => {
					if ( err ) {
						console.log( err )
					} else {
						delete require.cache[ require.resolve( "../database/languages.json" ) ]
						message.channel.send( language.setLanguage_LanguageNowIs + " " + args[ 0 ] );
					}
				})
				
			} else {
				message.channel.send( language.setLanguage_ValidLanguages + allowedLanguages.join( " | " ) );
			}
		} else {
			message.channel.send( language.setLanguage_NoArgs );
		}
	}
};