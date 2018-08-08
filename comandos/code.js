module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		const Discord = require( "discord.js" ),
		fs = require( "fs" );
		var embed = new Discord.RichEmbed(),
		user = message.author,
		config = require( "../config.json" ),
		helper = require( "../helper.js" ),
		files = fs.readdirSync( "./comandos/" );

		if ( args[ 0 ] ) {
			if ( files.find( s => args[ 0 ].toLowerCase().includes( s ) ) ) {
				if ( config.premium.find( s => message.author.id === s ) ) {
					fs.readFile( `comandos/${ args[ 0 ] }` , "utf8" , ( err , data ) => {
						try {
							embed.setAuthor( user.username , user.displayAvatarURL );
							embed.setTimestamp();
							embed.setColor( message.member.displayHexColor );
							embed.setFooter( language.CreatedBy );
							embed.setTitle( args[ 0 ] );
							embed.addField( language.Code , helper.embed( data , "JavaScript" ) );
							message.channel.send( embed );
						} catch ( e ) {
							helper.error_message( message , message.member , e );
						}
					});
				} else {
					message.reply( language.user_notPBU );
				}
			} else {
				message.reply( language.code_invalidCommand );
			}
		} else {
			message.reply( language.code_NoArgs );
		}
	}
};
