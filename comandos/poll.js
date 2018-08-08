module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		user = message.author,
		SPELLCARD_DIVISION = message.content.split( " " ).slice( 1 ).join( " " ).split( " | " ),
		embed = new Discord.RichEmbed();

		if ( SPELLCARD_DIVISION[ 0 ] && SPELLCARD_DIVISION[ 1 ] ) { //Eu tenho uns problemas ~zerinho6
			try {
				embed.setAuthor( user.username , user.displayAvatarURL );
				embed.setTimestamp();
				embed.setFooter( language.CreatedBy );
				embed.setColor( message.member.displayHexColor );
				embed.addField( SPELLCARD_DIVISION[ 0 ] , SPELLCARD_DIVISION[ 1 ] );
				message.channel.send( embed ).then( message => {
					message.react( language.poll_thumbsup ).then( message.react( language.poll_thumbsdown ) );
				});
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		}
	}
};
