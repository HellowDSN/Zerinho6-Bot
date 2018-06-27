var config = require( "../config.json" );
module.exports = {
    run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
		var moment = require( "moment" ),
		Discord = require( "discord.js" ),
		k = require( "../comandos/avatar.js" ),
		embed = new Discord.RichEmbed();
		moment.locale( "pt-BR" );
		
		if ( message.guild.iconURL ) {
			embed.setAuthor( message.guild.name , message.guild.iconURL );
			embed.setThumbnail( message.guild.iconURL );
		} else {
			embed.setAuthor( "Informações sobre " + message.guild.name );
		}
		embed.setTimestamp();
		embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		embed.addField( "<a:cursor:404001393360502805> | Nome do servidor" , message.guild.name , true );
		embed.setColor( message.member.displayHexColor );
		message.guild.fetchMembers();
		embed.addField( ":busts_in_silhouette: | Membros" , message.guild.memberCount , true );
		embed.addField( ":crown: | Dono" , message.guild.owner.user.tag , true );
                embed.addField( "<:discord:314003252830011395> | ID" , message.guild.id , true );
                embed.addField( ":earth_americas: | Região do servidor" , message.guild.region , true );
                embed.addField( ":calendar_spiral: | Criado em" , moment( message.guild.createdAt ) , true );
		embed.addField( ":clipboard: | Quantidade de cargos" , message.guild.roles.size , true );
		try {
			message.channel.send( embed );
		} catch ( e ) {
			k.special( message , message.member , e );
		}
    },
    description: "Mostra algumas informações sobre o servidor.",
    photo: "https://i.imgur.com/4pQAEHl.png",
    permission: "Nenhuma informação necessaria",
    use: ` ${ config.prefixes[ 0 ] }serverinfo`
};
