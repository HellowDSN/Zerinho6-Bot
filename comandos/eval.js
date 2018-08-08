module.exports = {
	run: ( bot , message , args , language ) => {
		var config = require( "../config.json" );
		
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		if ( message.author.id !== config.dono ) return;
		
		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		code = message.content.split( " " ).slice( 1 ).join( " " ),
		FieldDescriptions = [ language.Code , language.Typeof , language.Result ],
		FieldComplements = [ helper.embed( code , "JavaScript" ) , helper.embed( typeof( code ) , "JavaScript" ) , helper.embed( eval( code ) , "JavaScript" ) ],
		embed = new Discord.RichEmbed();

		try {
			embed.setColor( message.member.displayHexColor );
			embed.setFooter( language.CreatedBy );
			for ( let i = 0 ; i < FieldComplements.length ; i++ ) {
				embed.addField( FieldDescriptions[ i ] , FieldComplements[ i ] , true );
			}
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	}
};
