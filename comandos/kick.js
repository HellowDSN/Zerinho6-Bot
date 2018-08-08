module.exports = {
	run: ( bot, message , args , language ) => {
		var mencionado = message.mentions.users.first(),
		helper = require( "../helper.js" );
		if ( message.guild.member( bot.user.id ).hasPermission( "KICK_MEMBERS" ) ) {
			if ( message.member.hasPermission( "KICK_MEMBERS" ) ) {
				if ( mencionado ) {
					if ( message.guild.member( bot.user.id ).highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
						if ( message.member.highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
							if ( mencionado !== message.guild.owner ) {
								//Jezz, Odeio usar essa quantidade de "if" ~Zerinho6
								try {
									message.guild.member( mencionado ).kick( mencionado );
									message.reply( language.kick_user_kicked );
								} catch ( e ) {
									helper.error_message( message , message.member , e );
								}
							} else { //Jesus Crist, i should use switch & case.
								message.reply( language.kick_isOwner );
							}
						} else {
							message.reply( language.kick_user_HaveHighterRole );
						}
					} else {
						message.reply( language.kick_user_HaveHighterRoleThanBot );
					}
				} else {
					message.reply( language.kick_noMention );
				}
			} else {
				message.reply( language.kick_noPermission );
			}
		} else {
			message.reply( language.kick_BotnoPermission );
		}
	}
};
