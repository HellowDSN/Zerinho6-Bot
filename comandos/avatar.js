module.exports = {
	run: ( bot, message , args , language ) => {
		var mencionado = message.mentions.users.first(),
		helper = require( "../helper.js" );

		if ( message.guild.member( bot.user.id ).hasPermission( "BAN_MEMBERS" ) ) {
			if ( message.member.hasPermission( "BAN_MEMBERS" ) ) {
				if ( mencionado ) {
					if ( message.guild.member( bot.user.id ).highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
						if ( message.member.highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
							if ( mencionado !== message.guild.owner ) {
								//Jezz, Odeio usar essa quantidade de "if" ~Zerinho6
								try {
									message.guild.ban( mencionado );
									message.reply( language.ban_user_banned );
								} catch ( e ) {
									helper.error_message( message , message.member , e );
								}
							} else {
								message.reply( language.ban_user_isOwner );
							}
						} else {
							message.reply( language.ban_user_HaveHighterRole );
						}
					} else {
						message.reply( language.ban_user_HaveHighterRoleThanBot );
					}
				} else {
					message.reply( language.ban_NoMention );
				}
			} else {
				message.reply( language.ban_NoPermission );
			}
		} else {
			message.reply( language.ban_BotNoPermisson );
		}
	}
};
