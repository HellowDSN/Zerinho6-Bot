module.exports = {
	bold: function( text ) {
		return "**" + text + "**";
	},
	italic: function( text ) {
		return "_" + text + "_";
	},
	italic_bold: function( text ) {
		return "**_" + text + "_**";
	},
	underline: function( text ) {
		return "__" + text + "__";
	},
	strikethrough: function( text ) {
		return "~~" + text + "~~";
	},
	bold_strikethroung: function( text ) {
		return "**~~" + text + "~~**";
	},
	bold_underline: function( text ) {
		return "**__" + text + "__**";
	},
	italic_underline: function( text ) {
		return "*__" + text + "__*"; //Yeah, * = _
	},
	italic_strikethroung: function( text ) {
		return "*~~" + text + "~~*";
	},
	underline_strikethroung: function( text ) {
		return "__~~" + text + "~~__";
	},
	black_bg: function( text ) { //IDK the name
		return "`" + text + "`";
	},
	embed: function( text , language ) {
		if ( language === "no" ) 
			return "```" + text + "```";
		else return "```" + language + "\n" + text + "```";
	},
	bracket: function( text , bracket ) {
		if ( bracket === "(" )
			return "(" + text + ")";
		else if ( bracket === "{" )
			return "{" + text + "}";
		else if ( bracket === "[" )
			return "[" + text + "]";
	},
	get_mention: function ( the_message , number ) {
		return the_message.mentions.users.array()[ number ];module.exports = {
	bold: function( text ) {
		return "**" + text + "**";
	},
	italic: function( text ) {
		return "_" + text + "_";
	},
	italic_bold: function( text ) {
		return "**_" + text + "_**";
	},
	underline: function( text ) {
		return "__" + text + "__";
	},
	strikethrough: function( text ) {
		return "~~" + text + "~~";
	},
	bold_strikethroung: function( text ) {
		return "**~~" + text + "~~**";
	},
	bold_underline: function( text ) {
		return "**__" + text + "__**";
	},
	italic_underline: function( text ) {
		return "*__" + text + "__*"; //Yeah, * = _
	},
	italic_strikethroung: function( text ) {
		return "*~~" + text + "~~*";
	},
	underline_strikethroung: function( text ) {
		return "__~~" + text + "~~__";
	},
	black_bg: function( text ) { //IDK the name
		return "`" + text + "`";
	},
	embed: function( text , language ) {
		if ( language === "no" ) {
			return "```" + text + "```"
		} else {
			return "```" + language + "\n" + text + "```";
		}
	},
	bracket: function( text , bracket ) {
		if ( bracket === "(" )
			return "(" + text + ")";
		else if ( bracket === "{" )
			return "{" + text + "}";
		else if ( bracket === "[" )
			return "[" + text + "]";
		else return console.log( "Invalid bracket." );
	},
	get_mention: function ( the_message , number ) {
		the_message.mentions.users.first() === true ? the_message.mentions.users.array()[ number ] : false;
	},
	error_message: function ( mensagem , membro, error ) {

		const Discord = require( "discord.js" );
		var embed = new Discord.RichEmbed(),
		helper = require( "./helper.js" );

		embed.setColor( membro.displayHexColor );
		embed.setTitle( helper.language( mensagem , "error_message_title" ) );
		embed.addField( helper.language( mensagem , "error_message_field" ) , helper.embed( error , "no" ) );
		embed.setTimestamp();
		embed.setFooter( helper.language( mensagem , "CreatedBy" ) );
		mensagem.channel.send( embed );

	},
	checkURL: function ( url , no_gif ) { //bote uma função para tirar o .gif

		var the_regex = !no_gif ? /.(jpeg|jpg|png)$/ : /.(jpeg|jpg|gif|png)$/ ;

		return( url.match( the_regex ) != null );
	},
	get_image: function ( the_message , check ) {
		var helper = require( "./helper.js" ),
		argument = the_message.content.split( " " ).slice( 1 ).join( " " );

		if ( the_message.attachments.size >= 1 )
			return check === true ? true : the_message.attachments.first().url;
		else if ( helper.checkURL( argument , true ) ) 
			return check === true ? true : argument;
		else return false;
	},
	language: function ( message , block ) {
		const fs = require( "fs" ),
		ini = require( "ini" );
		var config = require( "./config.json" ),
		database = require( "./database/languages.json" ),
		language = ini.parse( fs.readFileSync( "./languages/" + config.language + ".ini" , "utf-8" ) );
		
		if ( database[ message.guild.id ] !== false ) {
			let language = ini.parse( fs.readFileSync( "./languages/" + database[ message.guild.id ].language + ".ini" , "utf-8" ) );
			return language[ block ];
		} else {
			return language[ block ];
		}
	}
};
	},
	error_message: function( mensagem , membro, error ) {
		var Discord = require( "discord.js" ),
		embed = new Discord.RichEmbed();
		embed.setColor( membro.displayHexColor ); 
	        embed.setTitle( "Oh..um erro.");
	        embed.addField( "Isso foi inesperado.", "```" + error + "```" );
	        embed.setTimestamp();
	        embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
	        mensagem.channel.send( embed );
	},
	checkURL: function( url , no_gif ) { //bote uma função para tirar o .gif 
	
		var the_regex = !no_gif ? /.(jpeg|jpg|png)$/ : /.(jpeg|jpg|gif|png)$/ ;
		
		return( url.match( the_regex ) != null );
	},
	get_image: function ( the_message ) {
		var helper = require( "../helper.js" ),
		argument = the_message.content.split( " " ).slice( 1 ).join( " " );
		
		if ( the_message.attachments.size >= 1 ) {
			return the_message.attachments.first().url;
		} else if ( helper.checkURL( argument , true ) ) {
			return argument;
		} else {
			return false;
		}
	}
};
