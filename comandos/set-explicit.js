var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.member.hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Você precisa da permissão de gerenciar servidor para executar esse comando." );
		if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_GUILD" ) ) return message.reply( "Eu preciso da permissão de gerenciar servidor para executar esse comando." );
		
		var helper = require( "../helper.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		number,
		user = message.author,
		levels = [ "https://i.imgur.com/t9RQj9t.png" , 
		"https://i.imgur.com/7WmYLdo.png" , 
		"https://i.imgur.com/8YF9lK6.png" ];
		
		if ( args [ 0 ] ) {
			number = parseInt( args[ 0 ] );
			if ( !isNaN( number ) ) {
				if ( 3 > number  && number >= 0 ) {
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
					message.reply( "As escolha começam de 0 a 2." );
				}
			} else {
				message.reply( "O nivel deve ser em numero (0 | 1 | 2)." );
			}
		} else {
			message.reply( "Esqueceu de por o nivel que deve ser usado." );
		}
	},
	description: "Altera o nivel de verificação de conteudo explícito do servidor.",
	photo: "https://i.imgur.com/Rawteg0.png",
	permission: "MANAGE_GUILD",
	use: `${ config.prefixes[ 0 ] }set-explicit (0 | 1 | 2)`
};
