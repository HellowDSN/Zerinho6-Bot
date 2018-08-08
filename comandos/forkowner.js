module.exports = {
	run: ( bot , message , args , language ) => {
		if ( !message.guild.member( bot.user.id ).hasPermission( "EMBED_LINKS" ) ) return message.reply( language.Bot_need_permission + language.embed_links + language.ToExecute );
		
		const Discord = require( "discord.js" );
		var helper = require( "../helper.js" ),
		embed = new Discord.RichEmbed(),
		config = require( "../config.json" ),
		user = message.author,
		formatos = [ "png" , "jpg" , "gif" ],
		locked = config.personal === "yes" ? ":lock:" : ":unlock:",
		color = config.custom_embed_color === "no" ? message.member.displayHexColor : config.custom_embed_color;

		embed.setColor( color );
		embed.setFooter( language.CreatedBy );
		embed.setTimestamp();
		embed.setAuthor( user.username , user.displayAvatarURL );
		embed.addField( locked + language.forkowner_personalBuild , config.personal , true );
		
		if ( config.BIO_AVATAR !== "no" && formatos.find( s => config.BIO_AVATAR.endsWith( s ) ) )
			embed.setImage( config.BIO_AVATAR );
		
		if ( config.Github_name !== "no" )
			embed.addField( language.forkowner_name , config.Github_name , true ); //Please, help me.
		
		if ( config.Github_user_link !== "no" )
			embed.addField( language.forkowner_userLink , config.Github_user_link , true );
		
		if ( config.Github_zerinhobot_fork_link !== "no" )
			embed.addField( language.forkowner_forkLink , config.Github_zerinhobot_fork_link , true );
		
		if ( config.discord_usertag !== "no" )
			embed.addField( language.forkowner_ownerTag , config.discord_usertag , true );
		
		if ( config.BIO !== "no" )
			embed.addField( language.forkowner_BIO , config.BIO , true );
		
		try {
			message.channel.send( embed );
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	}
};
