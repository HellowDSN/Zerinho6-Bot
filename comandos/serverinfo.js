module.exports = {
    run: ( bot , message , args , language ) => {
		
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		
		const  moment = require( "moment" ),
		Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		database = require( "../database/languages.json" ),
		DefinedLanguage = database[ message.guild.id ] ? database[ message.guild.id ].language : language.serverinfo_LanguageNotDefined,
		embed = new Discord.RichEmbed(),
		FieldDescriptions = [ language.serverinfo_GuildName , language.serverinfo_Members , language.serverinfo_Owner , language.serverinfo_ID , language.serverinfo_GuildRegion , language.serverinfo_CreatedIn , language.serverinfo_AmountOfRoles , language.serverinfo_Language ],
		FieldComplements = [ message.guild.name , message.guild.memberCount , message.guild.owner.user.tag , message.guild.id , message.guild.region , moment( message.guild.createdAt ) , message.guild.roles.size , DefinedLanguage ];
		moment.locale( language.serverinfo_MomentLocale );
		
		if ( message.guild.iconURL ) {
			embed.setAuthor( message.guild.name , message.guild.iconURL );
			embed.setThumbnail( message.guild.iconURL );
		} else {
			embed.setAuthor( language.serverinfo_InformationsAbout + message.guild.name );
		}

		embed.setTimestamp();
		embed.setFooter( language.CreatedBy );
		message.guild.fetchMembers();

		for ( let i = 0 ; i < FieldDescriptions.length ; i++ ) {
			embed.addField( FieldDescriptions[ i ] , helper.embed( FieldComplements[ i ] , "JavaScript" ) , true );
		}

		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}

	}
};
