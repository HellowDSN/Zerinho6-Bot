var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		var k = require( "../comandos/avatar.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author,
		level,
		frases = [ 
		"-**Nenhuma proteção.**" ,
		"-**Necessário ter e-mail verificado**"],
		images = [ "https://i.imgur.com/yi35I62.png",
		"https://i.imgur.com/m0OCwj6.png",
		"https://i.imgur.com/OApOrnO.png",
		"https://i.imgur.com/YYNQm0X.png",
		"https://i.imgur.com/c9az8BF.png" ],
		circulos = [ "<:circulo_branco:428733018622918689>",
		"<:circulo_verde:428732952092999680>",
		"<:circulo_amarelo:428733064605335573>",
		"<:circulo_laranja:428733119399460865>",
		"<:circulo_vermelho:428733167877226497>" ];
		frases[ 2 ] = frases[ 1 ] + "\n-**Precisa estar registrado no Discord por mais de 5 minutos**";
		frases[ 3 ] = frases[ 2 ] + "\n-**Precisa estar no servidor por 10 minutos**";
		frases[ 4 ] = frases[ 3 ] + "\n-**Precisa ter um numero de celular verificado na conta do Discord**";
		
		if ( args[ 0 ] ) {
			level = parseInt( args[ 0 ] );
			if ( !isNaN( level ) ) {
				if ( 5 > level ) {
					message.guild.setVerificationLevel( level );
					embed.setAuthor( user.username , user.displayAvatarURL );
					embed.setTitle( "O nivel de segurança foi definido para:" );
					embed.setDescription( circulos[ level ] + " | " + frases[ level ] );
					embed.setImage( images[ level ] );
					embed.setColor( message.member.displayHexColor );
					if ( message.guild.iconURL ) {
						embed.setThumbnail( message.guild.iconURL );
					}
					try {
						message.channel.send( embed );
					} catch ( e ) {
						k.special( message , message.member , e );
					}
				} else {
					message.reply( "Os niveis vão de 0 a 4. (Sim, comece a contar do 0, não de 1)" );
				}
			} else {
				message.reply( "O nivel deve ser em numero (de 0 a 4 ) " );
			}
		} else {
			message.reply( "Você não botou o nivel que vai ser utilizado" );
		}
	},
	description: "Edita o nivel de verificação do servidor",
	photo: "Link da imagem",
	permission: "MANAGE_GUILD",
	use: `${ config.prefixes[ 0 ] }set-verification nivel( de 0  a 4 )`
};