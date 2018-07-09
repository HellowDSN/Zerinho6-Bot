var config = require( "../config.json" );
module.exports = { 
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var old = new Date(),
		Discord = require( "discord.js" ),
		user = message.author,
		helper = require( "../helper.js" ),
		now,
		embed = new Discord.RichEmbed();
		
		function emoji( ping ) {
			var array = [ "<:circulo_vermelho:428733167877226497>" , "<:circulo_laranja:428733119399460865>" , "<:circulo_amarelo:428733064605335573>" , "<:circulo_verde:428732952092999680>" ],
			pings = [ 3000 , 1500 , 250 , 120 ];
			
			return array[ pings.findIndex( p => ping =< p ) ];
		}
		
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		message.channel.send( embed ).then( message => {
			now = new Date();
			
			embed.setTimestamp();
			embed.setColor( message.member.displayHexColor );
			embed.setAuthor( user.username, user.displayAvatarURL );
			embed.addField( emoji( Math.round( now - old ) ) + " | Pong", helper.embed( Math.round( now - old ) + "ms" , "JavaScript" ) );
			embed.addField( ":gear: **| RAM**" , helper.embed( `${ Math.round( process.memoryUsage().heapUsed / 1024 / 1024 ) }MB\u200B` , "JavaScript" ) );
			message.edit( embed );
		});
	},
	description: "Mostra o ping do bot.",
	photo: "https://i.imgur.com/VuN493P.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }ping`,
	special: function emoji( ping ) {
		var array = [ "<:circulo_vermelho:428733167877226497>" , "<:circulo_laranja:428733119399460865>" , "<:circulo_amarelo:428733064605335573>" , "<:circulo_verde:428732952092999680>" ],
		pings = [ 3000 , 1500 , 250 , 120 ];
		
		return array[ pings.findIndex( p => ping > p ) ];
	}
};
