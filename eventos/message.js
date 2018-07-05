/* global Set */
var talkedRecently = new Set();
exports.run = function( message ) {
	try {
		var fs = require( "fs" ),
		config = require( "../config.json" ),
		Discord = require( "discord.js" ),
		bot = new Discord.Client();
		  
		if ( message.channel.type === "dm" || message.author.bot || !message.channel.permissionsFor( this.user.id ).has( "SEND_MESSAGES" ) ) {
			return;
		};
		  
		function startsWith( name ) {
			return message.content.toLowerCase().startsWith( name.toLowerCase() );
		};
		
		function includes( name ) {
			return message.content.toLowerCase().includes( name );
		}; 
		
		message.prefix = config.prefixes.find( ( p ) => startsWith( p ) ) || null; // Obrigado tsu
		var args = message.content.split( " " );
		  
		if ( message.prefix && args[ 0 ] ) {
			if ( talkedRecently.has( message.author.id ) ) return;
			talkedRecently.add( message.author.id );
			setTimeout( () => {
				talkedRecently.delete( message.author.id );
			}, 6000);
			  
			var name = args[ 0 ].slice( message.prefix.length ).toLowerCase(),
			Comands = fs.readdirSync( "./comandos" ).map( ( c ) => c.replace( /.js/gi, "" ).toLowerCase() ),
			Command = Comands.includes( name ) ? require( `../comandos/${ name }.js` ) : null;
			  
			if ( Command ) {
				if ( config.personal === "yes" && !config.premium.find( s => message.author.id === s ) ) {
					return;
				} else {
					console.log( "\n" + message.author.tag + " usou o " + config.bot_name + " para utilizar o " + name + " no servidor: " + message.guild.name + "\nMembros: " + message.guild.memberCount + "\nID: " + message.guild.id + "\nDono: " + message.guild.owner.user.tag + "(" + message.guild.owner.user.id + ")" + "\nRegião: " + message.guild.region );
					Command.run( this , message , args.slice( 1 ) );
				}
			};
		};
	} catch( e ) {
		console.error( e );
	};
};
/* global Set */
exports.run = function( message ) {
	try {
		var talkedRecently = new Set(),
		fs = require( "fs" ),
		helper = require( "../helper.js" ),
	    config = require( "../config.json" );
		  
		if ( message.channel.type === "dm" || message.author.bot || !message.channel.permissionsFor( this.user.id ).has( "SEND_MESSAGES" ) ) {
			return;
		}
		
	    message.prefix = config.prefixes.find( ( p ) => message.content.toLowerCase().startsWith( p.toLowerCase() ) ) || null; // Obrigado tsu
        var args = message.content.split( " " );
		  
		if ( message.prefix && args[ 0 ] ) {
			if ( talkedRecently.has( message.author.id ) ) return;
			talkedRecently.add( message.author.id );
	        setTimeout( () => {
				talkedRecently.delete( message.author.id );
	        }, 6000 );
			  
			var name = args[ 0 ].slice( message.prefix.length ).toLowerCase(),
			Comands = fs.readdirSync( "./comandos" ).map( ( c ) => c.replace( /.js/gi, "" ).toLowerCase() ),
		    Command = Comands.includes( name ) ? require( `../comandos/${ name }.js` ) : null;
			  
			if ( Command ) {
				if ( config.personal === "yes" && !config.premium.find( s => message.author.id === s ) ) {
					return;
				} else {
					this.guilds.get( "356945572176986112" ).channels.get( "462615771252523008" ).send( "\n" + message.author.tag + helper.bracket( message.author.id , "(" ) + " usou o " + config.bot_name + " para utilizar o " + name + "\nGuild: " + message.guild.name + helper.bracket( message.guild.id , "(" ) + "\n -Dono: " + message.guild.owner.user.tag + helper.bracket( message.guild.owner.user.id , "(" ) + "\n -Membros: " + message.guild.memberCount + "\nContent: " + message.content );
					Command.run( this , message , args.slice( 1 ) );
				}
			}
		}
	} catch( e ) {
	    console.error( e );
	}
};
