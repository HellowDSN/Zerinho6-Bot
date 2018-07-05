var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		if ( message.author.id !== config.dono ) return;
		
		var Discord = require( "discord.js" ),
		helper = require( "../helper.js" ),
		code = message.content.split( " " ).slice( 1 ).join( " " ),
		FieldDescriptions = [ "Codigo" , "typeof" , "Resultado" ],
		FieldComplements = [ helper.embed( code , "JavaScript" ) , helper.embed( typeof( code ) , "JavaArray" ) , helper.embed( eval( code ) , "JavaScript" ) ],
		embed = new Discord.RichEmbed();
		
		try {
			embed.setColor( message.member.displayHexColor );
			embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
			for ( let i = 0 ; i < FieldComplements.length ; i++ ) {
				embed.addField( FieldDescriptions[ i ] , FieldComplements[ i ] , true );
			}
			message.channel.send( embed );
		} catch ( e ) {
			embed.setColor( message.member.displayHexColor );
			embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
			embed.addField( "Erro", helper.embed( e , "JavaScript" ) );
			message.channel.send( embed );
		}
	},
	description: "Executa um script.",
	photo: "https://i.imgur.com/pUNLB9y.png",
	permission: "Bot Owner",
	use: `${ config.prefixes[ 0 ] }eval codigo`
};
