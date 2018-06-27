var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		var mencionado = message.mentions.users.first();
		if ( message.guild.member( bot.user.id ).hasPermission( "KICK_MEMBERS" ) ) {
			if ( message.member.hasPermission( "KICK_MEMBERS" ) ) {
				if ( mencionado ) {
					if ( message.guild.member( bot.user.id ).highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
						if ( message.member.highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
							if ( mencionado !== message.guild.owner ) {
								//Jezz, Odeio usar essa quantidade de "if" ~Zerinho6
								try {
									message.guild.member( mencionado ).kick( mencionado );
                                                                        message.reply( "O usuario foi kickado com sucesso." );									
								} catch ( e ) {
									var k = require( "../comandos/avatar.js" );
									k.special( message , message.member , e );
								}
							} else {
								message.reply( "Você não pode kickar o dono do servidor, ninguém pode. :joy: :ok_hand:" );
							}
						} else {
							message.reply( "O membro que você está tentando kickar tem um cargo cuja a posição dele está acima do seu 'maior cargo'." );
						}
					} else {
						message.reply( "O membro que você está tentando kickar tem um cargo cuja a posição dele está acima do meu 'maior cargo'." );
					}
				} else {
					message.reply( "Mencione o membro que deve ser kickar." );
				}
			} else {
				message.reply( "Você não tem a permissão de kickar membros." );
			}
		} else {
			message.reply( "Eu não tenho a permissão de kickar membros. :/" );
		}
	},
	description: "kicka o membro mencionado",
	photo: "https://i.imgur.com/ISEJPYr.png",
	permission: "KICK_MEMBERS",
	use: `${ config.prefixes[ 0 ] }kick @usuario`
};
