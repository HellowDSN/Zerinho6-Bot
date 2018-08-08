module.exports = {
	run: ( bot, message , args , language ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.Bot_need_permission + language.manage_guild + language.ToExecute );

		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed(),
		number,
		user = message.author,
		levels = [
			language.setExplicit_levels ,
			language.setExplicit_levels2 ,
			language.setExplicit_levels3 ,
		];

		if ( args [ 0 ] ) {
			number = parseInt( args[ 0 ] );
			if ( !isNaN( number ) ) {
				if ( 3 > number && number >= 0 ) {
					try {
						message.guild.setExplicitContentFilter( number );
						embed.setAuthor( user.username , user.displayAvatarURL );
						embed.setTimestamp();
						embed.setColor( message.member.displayHexColor );
						embed.setImage( levels[ number ] );
						message.channel.send( embed );
					} catch ( e ) {
						helper.error_message( message , message.member , e );
					}
				} else {
					message.reply( language.setExplicit_TheChoosesStartsFrom );
				}
			} else {
				message.reply( language.setExplicit_NoNumeral );
			}
		} else {
			message.reply( language.setExplicit_NoArgs );
		}
	} 
};
