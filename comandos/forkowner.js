var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if ( !message.guild.member( bot.user.id ).hasPermission( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		var k = require( "../comandos/avatar.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		config = require( "../config.json" ),
		user = message.author,
		formatos = [ "png" , "jpg" , "gif" ],
		locked = config.personal === "yes" ? ":lock:" : ":unlock:",
		color = config.custom_embed_color === "no" ? message.member.displayHexColor : config.custom_embed_color;
		
		embed.setColor( color );
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		embed.setTimestamp();
		embed.setAuthor( user.username , user.displayAvatarURL );
		embed.addField( locked + " | Personal Build?" , config.personal , true ); 
		if ( config.BIO_AVATAR !== "no" && formatos.find( s => config.BIO_AVATAR.endsWith( s ) ) ) 
			embed.setImage( config.BIO_AVATAR );
		if ( config.Github_name !== "no" ) 
			embed.addField( "<:GitHub_icon:460929350045401098> | Name" , config.Github_name , true );
		if ( config.Github_user_link !== "no" ) 
			embed.addField( "<:GitHub_icon:460929350045401098> | User Link" , config.Github_user_link , true );
		if ( config.Github_zerinhobot_fork_link !== "no" ) 
			embed.addField( "<:GitHub_icon:460929350045401098> | Fork Link" , config.Github_zerinhobot_fork_link , true );
		if ( config.discord_usertag !== "no" ) 
			embed.addField( "<:GitHub_icon:460929350045401098> <:discord:314003252830011395> | Owner Discord Tag" , config.discord_usertag , true );
		if ( config.BIO !== "no" ) 
			embed.addField( ":page_facing_up: | BIO" , config.BIO , true );
		try {
			message.channel.send( embed );
		} catch ( e ) {
			k.special( message , message.member , e );
		}
	},
	description: "Informações sobre o dono da versão do zerinho6 bot",
	photo: "https://i.imgur.com/xmcYeqo.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }forkowner`
};