var config = require( "../config.json" );
module.exports = {
    run: ( bot , message , args ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		
		var moment = require( "moment" ),
		Discord = require( "discord.js" ),
		helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed(),
		FieldDescriptions = [ "<a:cursor:404001393360502805> | Nome do servidor" , ":busts_in_silhouette: | Membros" , ":crown: | Dono" , "<:discord:314003252830011395> | ID" , ":earth_americas: | Região do servidor" , ":calendar_spiral: | Criado em" , ":clipboard: | Quantidade de cargos" ],
		FieldComplements = [ message.guild.name , message.guild.memberCount , message.guild.owner.user.tag , message.guild.id , message.guild.region , moment( message.guild.createdAt ) , message.guild.roles.size ];
		moment.locale( "pt-BR" );
		
		if ( message.guild.iconURL ) {
			embed.setAuthor( message.guild.name , message.guild.iconURL );
			embed.setThumbnail( message.guild.iconURL );
		} else {
			embed.setAuthor( "Informações sobre " + message.guild.name );
		}
		embed.setTimestamp();
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		embed.setColor( message.member.displayHexColor );
		message.guild.fetchMembers();
		for ( i = 0 ; i < FieldDescriptions.length ; i++ ) {
			embed.addField( FieldDescriptions[ i ] , FieldComplements[ i ] , true );
		}
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	},
	description: "Mostra algumas informações sobre o servidor.",
	photo: "https://i.imgur.com/4pQAEHl.png",
	permission: "Nenhuma informação necessaria",
	use: `${ config.prefixes[ 0 ] }serverinfo`
};
