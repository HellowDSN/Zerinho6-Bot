var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var helper = require( "../helper.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		config = require( "../config.json" ),
		startTime = Date.now(),
		endTime,
		ping,
		q = require( "../comandos/ping.js" ),
		segundos = Math.floor( process.uptime() % 60 ),
		minutos = Math.floor( process.uptime() / 60 % 60 ),
		user = message.author,
		hora = Math.floor( process.uptime() / 3600 % 24 ),
		FieldDescriptions,
		FieldComplements;
		
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		message.channel.send( embed ).then( message => {
			endTime = Date.now();
			ping = Math.round( endTime - startTime ),
			FieldDescriptions = [ "<:online:313956277808005120> | Uptime" , "<:discord:314003252830011395> | Discord.js ver." , ":wrench: | NPM ver." , "<a:cursor:404001393360502805> | Servidores" , ":crown: | Bot Owner" ],
			FieldComplements = [ helper.embed( hora + ":" + minutos + ":" + segundos , "JavaScript" ) , helper.embed( Discord.version , "JavaScript" ) , helper.embed( bot.guilds.size , "JavaScript" ) , helper.embed( config.discord_usertag , "JavaScript" ) , helper.embed( ping , "JavaScript" ) ];
		
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
	},
	description: "Mostra algumas informações sobre o BOT",
	photo: "Link da imagem",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }info`
};
