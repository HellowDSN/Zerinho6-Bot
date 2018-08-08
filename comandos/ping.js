module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		
		const Discord = require( "discord.js" );
		var old = new Date(),
		user = message.author,
		helper = require( "../helper.js" ),
		now,
		embed = new Discord.RichEmbed();

		function emoji( ping ) {
			var array = [ language.ping_ReallyHighPing , language.ping_HighPing , language.ping_MediumPing , language.ping_LowPing ],
			pings = [ 3000 , 1500 , 250 , 120 ];

			return array[ pings.findIndex( p => ping > p ) ];
		}
		
		embed.setFooter( language.CreatedBy );
		message.channel.send( embed ).then( message => {
			now = new Date();

			embed.setTimestamp();
			embed.setColor( message.member.displayHexColor );
			embed.setAuthor( user.username, user.displayAvatarURL );
			embed.addField( emoji( Math.round( now - old ) ) + language.ping_Pong, helper.embed( Math.round( now - old ) + language.ms , "JavaScript" ) );
			embed.addField( language.ping_RAM , helper.embed( `${ Math.round( process.memoryUsage().heapUsed / 1024 / 1024 ) + language.MB}\u200B` , "JavaScript" ) );
			message.edit( embed );
		});
	}
};
