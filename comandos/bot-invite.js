module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		var Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author;

		if ( args[ 0 ] ) {
			if ( !isNaN( parseInt( args[ 0 ] ) ) ) {
				if ( args[ 0 ].length === 18 ) {
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTimestamp();
					embed.setFooter( language );
					embed.setColor( message.member.displayHexColor );
					embed.addField( language.botinvite_link , "https://discordapp.com/oauth2/authorize?&client_id=" + args[ 0 ] + "&scope=bot" );
					message.channel.send( embed );
				} else {
					message.reply( language.botinvite_InvalidID );
				}
		 	} else {
				message.reply( language.botinvite_NaN );
			}
		} else {
			message.reply( language.botinvite_NoArgs );
		}
	}
};
