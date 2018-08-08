module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		const Discord = require( "discord.js" ),
		moment = require( "moment" )
		var mention = message.mentions.users.first(),
		user = mention ? mention : message.author,
		embed = new Discord.RichEmbed(),
		helper = require( "../helper.js" ),
		status = {
			"online": language.userinfo_Online,
			"idle": language.userinfo_idle,
			"dnd": language.userinfo_dnd,
			"offline": language.Offline
		},
		FieldDescriptions = [ language.userinfo_Activity , language.userinfo_Status , language.userinfo_AccountCreatedIn , language.userinfo_JoinedTheGuildIn , language.userinfo_ID , language.userinfo_Username , language.userinfo_Hex ],
		FieldComplements = [ game_type( user ) , status[ user.presence.status ] , moment( user.createdAt ).format( "LL" ) , moment( message.guild.member.joinedAt ).format( "LL" ) , user.id , user.username , message.guild.member( user ).displayHexColor ];
		
		function game_type( user ) {
			var jogo = user.presence.game;
			
			if ( jogo !== null ) {
				var k = jogo.streaming ? language.userinfo_streaming + jogo.name : language.userinfo_playing + jogo.name;
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
		embed.setFooter( language.Createdby );
		
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	}
};
