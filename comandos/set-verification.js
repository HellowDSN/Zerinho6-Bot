module.exports = {
	run: ( bot , message , args , language ) => {

		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.User_need_permission + language.manage_guild + language.ToExecute );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( language.Bot_need_permission + language.manage_guild + language.ToExecute );

		var helper = require( "../helper.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author,
		level,
		images = [
			language.setVerification_Images ,
			language.setVerification_Images2 ,
			language.setVerification_Images3 ,
			language.setVerification_Images4 ,
			language.setVerification_Images5
		],
		circulos = [
			language.setVerification_cicles ,
			language.setVerification_cicles2 ,
			language.setVerification_cicles3 ,
			language.setVerification_cicles4 ,
			language.setVerification_cicles5
		],
		frases = [
			language.setVerification_phrases ,
			language.setVerification_phrases2
		];
		frases[ 2 ] = frases[ 1 ] + language.setVerification_phrases3;
		frases[ 3 ] = frases[ 2 ] + language.setVerification_phrases4;
		frases[ 4 ] = frases[ 3 ] + language.setVerification_phrases5;

		if ( args[ 0 ] ) {
			level = parseInt( args[ 0 ] );
			if ( !isNaN( level ) ) {
				if ( 5 > level ) {
					message.guild.setVerificationLevel( level );
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTitle( language.setVerification_TheSecurityLevelHasBeenSetTo );
					embed.setDescription( circulos[ level ] + " | " + frases[ level ] );
					embed.setImage( images[ level ] );
					embed.setColor( message.member.displayHexColor );
					if ( message.guild.iconURL ) {
						embed.setThumbnail( message.guild.iconURL );
					}
					try {
						message.channel.send( embed );
					} catch ( e ) {
						helper.error_message( message , message.member , e );
					}
				} else {
					message.reply( language.setVerification_TheLevelsGoesFrom );
				}
			} else {
				message.reply( language.setVerification_TheLevelMustBeANumber );
			}
		} else {
			message.reply( language.NoArgs );
		}
	}
};
