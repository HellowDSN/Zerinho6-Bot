module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		
		const Discord = require( "discord.js" ),
		fs = require( "fs" );
		var user = message.author,
		thing,
		helper = require( "../helper.js" ),
		config = require( "../config.json" ),
		files = fs.readdirSync( "./comandos/" ),
		permission_check,
		permission,
		embed = new Discord.RichEmbed();

		try {
			if ( !args[ 0 ] ) {
				embed.setAuthor( " - " + user.username , user.displayAvatarURL );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setFooter( language.CreatedBy );
				embed.addField( language.help_Commands , helper.black_bg( files.join( ", " ) ).replace( /.js/gi, "" ) );
				embed.addField( language.help_validPrefix , helper.black_bg( config.prefixes.join( "` `" ) ) );
				
				if ( message.guild.iconURL ) {
					embed.setThumbnail( message.guild.iconURL );
				}
				
				message.channel.send( embed );
			} else if ( args[ 0 ] && files.find( s => args[ 0 ].toLowerCase().includes( s.replace( /.js/gi, "" ) ) ) ) {
				thing = args[ 0 ].toLowerCase();
				permission_check = helper.language( message , thing + "_permission" );
				permission = permission_check !== undefined ? permission_check : language.NoPermissionNeeded;
				
				embed.setAuthor( user.username, user.diaplayAvatarURL );
				embed.setColor( message.member.displayHexColor );
				embed.setTimestamp();
				embed.setFooter( language.CreatedBy );
				embed.setImage( helper.language( message , thing + "_photo" ) );
				embed.addField( language.help_FieldDescription , helper.language( message , thing + "_description" ) );
				embed.addField( language.help_FieldUse , helper.language( message , thing + "_use" ) );
				embed.addField( language.help_FieldPermission, permission );
				
				if ( message.guild.iconURL ) {
					embed.setThumbnail( message.guild.iconURL );
				}
				
				message.channel.send( embed );
			} else {
				message.reply( language.help_CommandDontExist );
			}
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	}
};
