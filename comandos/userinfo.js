var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var user = message.mentions.users.first(),
		Discord = require("discord.js"),
		embed = new Discord.RichEmbed(),
		moment = require( "moment" ),
		k = require( "../comandos/avatar.js" ),
		status = {
			"online": "<:online:313956277808005120> **| On-line**",
			"idle": "<:away:313956277220802560> **| Ausente**",
			"dnd": "<:dnd:313956276893646850> **| Ocupado**",
			"offline": "<:offline:313956277237710868> **| Off-line"
		};
		
		function game_type( user ) {
			
			var jogo = user.presence.game;
			
			if ( jogo !== null ) {
				var k = jogo.streaming ? "<:streaming:313956277132853248> **|** fazendo stream: " + jogo.name : ":video_game: **|** jogando " + jogo.name + ".";
				return k
			}
		};

		
		if ( user ) {
			embed.setAuthor( user.username , user.displayAvatarURL );
			embed.setColor( message.guild.member( user ).displayHexColor );
			embed.setThumbnail( user.displayAvatarURL );
			embed.setTimestamp();
			embed.addField( "Atividade" , game_type( user ) , true );
			embed.addField( "Status" , status[ user.presence.status ] , true );
			embed.addField( ":page_facing_up: | Conta criada em" , moment( user.createdAt ).format( "LL" ) , true );
			embed.addField( ":busts_in_silhouette: | Entrou no servidor em" , moment( message.guild.member.joinedAt ).format( "LL" ) , true );
			embed.addField( "<:discord:314003252830011395> | ID" , user.id , true );
			embed.addField( "<a:cursor:404001393360502805> | Username" , user.username , true );
			embed.addField( "<:Rgbcolorwheel:460186309516853250> | Hex" , message.guild.member( user ).displayHexColor , true );
			embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
			try {
				message.channel.send( embed );
			} catch ( e ) {
				k.special( message , message.member , e );
			}
		} else {
			let user = message.author;
			embed.setAuthor( user.username , user.displayAvatarURL);
			embed.setColor( message.member.displayHexColor );
			embed.addField( "Atividade" , game_type( user ) , true );
			embed.addField( "Status" , status[ user.presence.status ] , true );
			embed.addField( ":page_facing_up: | Conta criada em" , moment( user.createdAt ).format( "LL" ) , true );
			embed.addField( ":busts_in_silhouette: | Entrou no servidor em" , moment( message.guild.member.joinedAt ).format( "LL" ) , true );
			embed.addField( "<:discord:314003252830011395> | ID" , user.id , true );
			embed.addField( "<a:cursor:404001393360502805> | Username" , user.username , true );
			embed.addField( "<:Rgbcolorwheel:460186309516853250> | Hex" , message.guild.member( user ).displayHexColor , true );
			embed.setThumbnail( user.displayAvatarURL );
			embed.setTimestamp();
			embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
			try {
				message.channel.send( embed );
			} catch ( e ) {
				k.special( message , message.member , e );
			}
		}
	},
	description: "Mostra as suas informações ou a do usuario mencionado",
	photo: "https://i.imgur.com/qs09nfm.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }userinfo qualquer coisa ou ${ config.prefixes[ 0 ] }userinfo @usuario`
}