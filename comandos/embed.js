module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		if ( args[ 0 ] ) {
			try {
				var Discord = require( "discord.js" ),
				user = message.author,
				embed = new Discord.RichEmbed();

				embed.setAuthor( user.username, user.displayAvatarURL );
				embed.addField( "** **" , args[ 0 ] );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setFooter( language.CreatedBy );
				message.channel.send( embed );
			} catch ( e ) {
				var helper = require( "../helper.js" );
				helper.error_message( message , message.member , e );
			}
		}
	}
};
