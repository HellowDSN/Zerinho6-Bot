var config = require( "../config.json" );
module.exports = { 
    run: ( bot , message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
	    var old = new Date(),
	    Discord = require( "discord.js" ),
	    k = require( "../comandos/avatar.js" ),
	    user = message.author,
	    embed = new Discord.RichEmbed();
	    embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
	    message.channel.send( embed ).then( message => {
	            var now = new Date();
		    function emoji( ping ) {
			    var array = [ "<:circulo_vermelho:428733167877226497>" , "<:circulo_verde:428732952092999680>" , "<:circulo_laranja:428733119399460865>" , "<:circulo_amarelo:428733064605335573>" ]; 
			    if ( ping > 3000 ) {
					return array[ 0 ];
			    } else if ( ping > 1500 ) {
				    return array[ 2 ];
			    } else if ( ping > 250 ) {
				    return array[ 3 ];
			    } else {
				    return array[ 1 ];
			    }
		    };
			
		    embed.setTimestamp();
		    embed.setColor( message.member.displayHexColor );
		    embed.setAuthor( user.username, user.displayAvatarURL );
		    embed.addField( emoji( Math.round( now - old ) ) + " | Pong", "```JavaScript\n" + Math.round( now - old ) + "ms```" );
		    embed.addField( ":gear: **| RAM**" , "```JavaScript\n" + `${ Math.round( process.memoryUsage().heapUsed / 1024 / 1024 ) }MB\u200B` + "```" );
		    try {
			    message.edit( embed );
		    } catch ( e ) {
			    k.special( message , message.member , e );
		    }
	    });
	},
	description: "Mostra o ping do bot.",
	photo: "https://i.imgur.com/VuN493P.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }ping`,
	special: function( ping ) {
		var array = [ "<:circulo_vermelho:428733167877226497>" , "<:circulo_verde:428732952092999680>" , "<:circulo_laranja:428733119399460865>" , "<:circulo_amarelo:428733064605335573>" ]; 
		if ( ping > 3000 ) {
			return array[ 0 ];
		} else if ( ping > 1500 ) {
			return array[ 2 ];
		} else if ( ping > 250 ) {
			return array[ 3 ];
		} else {
			return array[ 1 ];
		}
	}
};
