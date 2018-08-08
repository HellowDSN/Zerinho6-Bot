module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );

		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed(),
		config = require( "../config.json" ),
		startTime = Date.now(),
		endTime,
		ping,
		segundos = Math.floor( process.uptime() % 60 ),
		minutos = Math.floor( process.uptime() / 60 % 60 ),
		user = message.author,
		hora = Math.floor( process.uptime() / 3600 % 24 ),
		FieldDescriptions,
		FieldComplements;

		embed.setFooter( language.CreatedBy );
		message.channel.send( embed ).then( message => {
			endTime = Date.now();
			ping = Math.round( endTime - startTime );
			FieldDescriptions = [ language.info_Uptime , language.info_DiscordJS_ver , language.info_NPM_ver , language.info_Guilds , language.info_Bot_Owner ];
			FieldComplements = [ helper.embed( hora + ":" + minutos + ":" + segundos , "JavaScript" ) , helper.embed( Discord.version , "JavaScript" ) , helper.embed( process.version , "JavaScript" ) , helper.embed( bot.guilds.size , "JavaScript" ) , helper.embed( config.discord_usertag , "JavaScript" ) ];

			embed.setAuthor( user.username , user.displayAvatarURL );
			embed.setTimestamp();
			embed.setColor( message.member.displayHexColor );
			embed.setTitle( "<:botTag:230105988211015680> | " + config.bot_name );
			
			for ( let i = 0 ; i < FieldDescriptions.length ; i++ ) {
				embed.addField( FieldDescriptions[ i ] , FieldComplements[ i ] , true );
			}
			
			try {
				message.edit( embed );
			} catch ( e ) {
				helper.error_message( message , message.member , e );
			}
		});
	}
};
