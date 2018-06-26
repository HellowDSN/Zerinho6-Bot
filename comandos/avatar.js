var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
	    var Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed();
				
        function error_message( error ) {
			var embed = new Discord.RichEmbed();
	    	embed.setColor( message.member.displayHexColor ); 
	    	embed.setTitle( "Oh..um erro.");
	    	embed.addField( "Isso foi inesperado.", "```" + error + "```" );
	    	embed.setTimestamp();
	    	embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
	    	message.channel.send( embed );
        };
	
	    if ( args[ 0 ] && args[ 0 ] === "guild" ) {
			try {
				t_guild = message.guild;
			    if ( t_guild.iconURL ) {
					embed.setAuthor( t_guild.name , t_guild.iconURL );
		            embed.setTitle( "Icone do servidor(" + t_guild.name + ")" );
		            embed.setImage( t_guild.iconURL );
		            embed.setDescription( "\nEm forma de link: " + t_guild.iconURL + ".png" );
		            embed.setTimestamp();
		            embed.setColor( message.member.displayHexColor );
		            embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		            message.channel.send( embed );
				} else message.reply( "Este servidor não tem um icone definido." );
			} catch ( e ) {
				error_message( e );
	        }
	    } else if ( message.mentions.users.first() ) {
			try {
				var user = message.mentions.users.first();
				embed.setAuthor( user.username , user.displayAvatarURL );
		        embed.setImage( user.displayAvatarURL );
		        embed.setTitle( "Avatar de " + user.tag );
		        embed.setTimestamp();
		        embed.setColor( message.member.displayHexColor );
		        embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		        message.channel.send( embed );
	        } catch ( e ) {
				error_message( e );
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
	    	    error_message( e );
	        }
	    };
	},
	description: "Mostra o link do avatar/icon do(a) usuario/servidor",
	photo: "https://i.imgur.com/ryTGep9.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }avatar **ou** ${ config.prefixes[ 0 ] }avatar @usuario **ou** ${ config.prefixes[ 0 ] }avatar server`,
	special: function( mensagem , membro, error ) {
		var Discord = require( "discord.js" ),
	    embed = new Discord.RichEmbed();
		embed.setColor( membro.displayHexColor ); 
	    embed.setTitle( "Oh..um erro.");
	    embed.addField( "Isso foi inesperado.", "```" + error + "```" );
	    embed.setTimestamp();
	    embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
	    mensagem.channel.send( embed );
	}
};