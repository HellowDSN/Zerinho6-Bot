var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		user,
		t_guild,
		embed = new Discord.RichEmbed();
		
		if ( args[ 0 ] && args[ 0 ] === "guild" ) {
			try {
				t_guild = message.guild;
				if ( t_guild.iconURL ) {
					embed.setAuthor( t_guild.name , t_guild.iconURL );
					embed.setTitle( "Icone do servidor" + helper.bracket( t_guild.name , "(" ) );
					embed.setImage( t_guild.iconURL );
					embed.setDescription( "\nEm forma de link: " + t_guild.iconURL + ".png" );
					embed.setTimestamp();
					embed.setColor( message.member.displayHexColor );
					embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
					message.channel.send( embed );
				} else message.reply( "Este servidor não tem um icone definido." );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		} else if ( message.mentions.users.first() ) {
			try {
				user = message.mentions.users.first();
				embed.setAuthor( user.username , user.displayAvatarURL );
				embed.setImage( user.displayAvatarURL );
				embed.setTitle( "Avatar de " + user.tag );
				embed.setTimestamp();
				embed.setColor( message.member.displayHexColor );
				embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
				message.channel.send( embed );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		} else {
			try {
				let user = message.author;
				embed.setAuthor( user.username, user.displayAvatarURL );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setImage( user.displayAvatarURL );
				embed.setTitle( "Seu avatar." );
				embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
				message.channel.send( embed );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		}
	},
	description: "Mostra o link do avatar/icon do(a) usuario/servidor",
	photo: "https://i.imgur.com/ryTGep9.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }avatar **ou** ${ config.prefixes[ 0 ] }avatar @usuario **ou** ${ config.prefixes[ 0 ] }avatar server`,
};
