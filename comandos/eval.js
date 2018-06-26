var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
	    if( message.author.id !== config.dono ) return;
	
	    function srun( code ) {
			var Discord = require( "discord.js" ),
		    embed = new Discord.RichEmbed();
			
			try {
				eval( code );
			    embed.setColor( message.member.displayHexColor );
		        embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		        embed.addField( "Codigo", "```JavaScript\n" + code + "```" );
		        embed.addField( "typeof", "```JavaScript\n" + typeof( code ) + "```" );
		        message.channel.send( embed );
	        } catch ( e ) {
				embed.setColor( message.member.displayHexColor );
	    	    embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
	    	    embed.addField( "Erro", "```JavaScript" + e + "```" );
	    	    message.channel.send( embed );
	        }
	    }
		srun( message.content.split( " " ).slice( 1 ).join( " " ) );
	},
	description: "Executa um script.",
	photo: "https://i.imgur.com/pUNLB9y.png",
	permission: "Bot Owner",
	use: `${ config.prefixes[ 0 ] }eval codigo`
};