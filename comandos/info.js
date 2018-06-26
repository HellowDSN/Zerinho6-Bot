var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		var k = require( "../comandos/avatar.js" ),
		Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed(),
		config = require( "../config.json" ),
		startTime = Date.now(),
		q = require( "../comandos/ping.js" ),
		segundos = Math.floor( process.uptime() % 60 ),
		minutos = Math.floor( process.uptime() / 60 % 60 ),
		user = message.author,
		hora = Math.floor( process.uptime() / 3600 % 24 );
		
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		message.channel.send( embed ).then( message => {
			var endTime = Date.now(),
			ping = Math.round( endTime - startTime );
			
			embed.setAuthor( user.username , user.displayAvatarURL );
			embed.setTimestamp();
			embed.setColor( message.member.displayHexColor );
			embed.setTitle( "<:botTag:230105988211015680> | " + config.bot_name );
			embed.addField( "<:online:313956277808005120> | Uptime" , "```JavaScript\n" + hora + ":" + minutos + ":" + segundos + "```" , true );
			embed.addField( "<:discord:314003252830011395> | Discord.js ver." , "```" + Discord.version + "```" , true );
			embed.addField( ":wrench: | NPM ver." , "```" + process.version + "```" , true );
			embed.addField( "<a:cursor:404001393360502805> | Servidores" , "```" + bot.guilds.size + "```" , true );
			embed.addField( ":crown: | Bot Owner" , "```" + config.discord_usertag + "```" , true );
			embed.addField( q.special( ping ) + " | Ping" , "```JavaScript\n" + ping + "ms```" , true );
			embed.addField( ":gear: | RAM" , "```" + Math.round( process.memoryUsage().heapUsed / 1024 / 1024 ) + "MB```", true );
			try {
				message.edit( embed );
			} catch ( e ) {
				k.special( message , message.member , e );
			}
		});
	},
	description: "Mostra algumas informações sobre o BOT",
	photo: "Link da imagem",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }info`
};