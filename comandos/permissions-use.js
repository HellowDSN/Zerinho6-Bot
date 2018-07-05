var config = require( "../config.json" );
module.exports = {
	run:( bot , message , args ) => {
		if ( !message.guild.member( bot.user.id ).hasPermission( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
	
		var Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		user = message.author,
		helper = require( "../helper.js" ),
		permissions_array = [ "EMBED_LINKS" , "MANAGE_EMOJIS" , "MANAGE_CHANNELS" , "MANAGE_MESSAGES" , "BAN_MEMBERS" , "KICK_MEMBERS" , "MANAGE_GUILD" ],
		permissions = {
			"EMBED_LINKS": "ping **|** help **|** eval **|** avatar **|** embed **|** userinfo **|** upload **|** code **|** serverinfo **|** poll **|** permissions-use **|** template **|** info **|** forkowner **|** bot-invite",
			"MANAGE_EMOJIS": "addemoji",
			"MANAGE_CHANNELS": "addchannels",
			"MANAGE_MESSAGES": "clear",		//Thanks to daviputary
			"BAN_MEMBERS": "ban",
			"KICK_MEMBERS": "kick",
			"MANAGE_GUILD": "set-explicit **|** set-icon **|** set-name **|** set-verification"
		};
		
		function check( perm ) { 
			var emote = message.channel.permissionsFor( bot.user.id ).has( perm ) ? ":white_check_mark: **|** " : ":x: **|** ";
			return emote + permissions[ perm ];
		}
		
		embed.setAuthor( user.username, user.displayAvatarURL );
		embed.setTimestamp();
		embed.setColor( message.member.displayHexColor );
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		embed.setTitle( "Comandos que usam permissões especiais" );
		for ( i = 0 ; i < permissions_array.length ; i++ ) {
			embed.addField( permissions_array[ i ] , check( permissions_array[ i ] ) , true );
		}
	    embed.setDescription( "Os que tiverem com ':white_check_mark:' vão funcionar, já os que tiverem com ':x:'...não." );
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );		
	    }
	},
	description: "Mostra os comandos que usam X permissão e verifica se ele tem X permissão",
	photo: "https://i.imgur.com/8WzQN7I.png",
	permission: "EMBED_LINKS",
	use: `${ config.prefixes[ 0 ] }permissions-use`
};
