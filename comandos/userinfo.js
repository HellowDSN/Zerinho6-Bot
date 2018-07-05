var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var mention = message.mentions.users.first(),
		user = mention ? mention : message.author,
		Discord = require("discord.js"),
		embed = new Discord.RichEmbed(),
		moment = require( "moment" ),
		helper = require( "../helper.js" ),
		status = {
			"online": "<:online:313956277808005120> **| On-line**",
			"idle": "<:away:313956277220802560> **| Ausente**",
			"dnd": "<:dnd:313956276893646850> **| Ocupado**",
			"offline": "<:offline:313956277237710868> **| Off-line"
		},
		FieldDescriptions = [ "Atividade" , "Status" ,":page_facing_up: | Conta criada em" , ":busts_in_silhouette: | Entrou no servidor em" , "<:discord:314003252830011395> | ID" , "<a:cursor:404001393360502805> | Username" , "<:Rgbcolorwheel:460186309516853250> | Hex" ],
		FieldComplements = [ game_type( user ) , status[ user.presence.status ] , moment( user.createdAt ).format( "LL" ) , moment( message.guild.member.joinedAt ).format( "LL" ) , user.id , user.username , message.guild.member( user ).displayHexColor ];
		
		function game_type( user ) {
			var jogo = user.presence.game;
			
			if ( jogo !== null ) {
				var k = jogo.streaming ? "<:streaming:313956277132853248> **|** fazendo stream: " + jogo.name : ":video_game: **|** jogando " + jogo.name + ".";
				return k;
			}
		}

		embed.setAuthor( user.username , user.displayAvatarURL );
		embed.setColor( message.guild.member( user ).displayHexColor );
		embed.setThumbnail( user.displayAvatarURL );
		embed.setTimestamp();
		for ( let i = 0 ; i < FieldDescriptions.length ; i++ ) {
			embed.addField( FieldDescriptions[ i ] , FieldComplements[ i ] , true );
		}
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	},
	description: "Mostra as suas informações ou a do usuario mencionado",
	photo: "https://i.imgur.com/qs09nfm.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }userinfo qualquer coisa ou ${ config.prefixes[ 0 ] }userinfo @usuario`
};
