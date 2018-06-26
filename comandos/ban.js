var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		var mencionado = message.mentions.users.first();
		if ( message.guild.member( bot.user.id ).hasPermission( "BAN_MEMBERS" ) ) {
			if ( message.member.hasPermission( "BAN_MEMBERS" ) ) {
				if ( mencionado ) {
					if ( message.guild.member( bot.user.id ).highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
						if ( message.member.highestRole.position > message.guild.member( mencionado ).highestRole.position ) {
							if ( mencionado !== message.guild.owner ) {
								//Jezz, Odeio usar essa quantidade de "if" ~Zerinho6
								try {
									message.guild.ban( mencionado );
                                    message.reply( "O usuario foi banido com sucesso." );									
								} catch ( e ) {
									var k = require( "../comandos/avatar.js" );
				                    k.special( message , message.member , e );
								}
							} else {
								message.reply( "Você não pode banir o dono do servidor, ninguém pode. :joy: :ok_hand:" );
							}
						} else {
							message.reply( "O membro que você está tentando banir tem um cargo cuja a posição dele está acima do seu 'maior cargo'." );
						}
					} else {
						message.reply( "O membro que você está tentando banir tem um cargo cuja a posição dele está acima do meu 'maior cargo'." );
					}
				} else {
					message.reply( "Mencione o membro que deve ser banido." );
				}
			} else {
				message.reply( "Você não tem a permissão de banir membros." );
			}
		} else {
			message.reply( "Eu não tenho a permissão de banir membros. :/" );
		}
	},
	description: "Bane o membro mencionado",
	photo: "https://i.imgur.com/L0xudEG.png",
	permission: "BAN_MEMBERS",
	use: `${ config.prefixes[ 0 ] }ban @usuario`
};