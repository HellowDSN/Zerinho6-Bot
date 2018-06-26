var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		if( !message.channel.permissionsFor( bot.user.id ).has( "EMBED_LINKS" ) ) return message.reply( "Eu preciso da permissão de embed_links para executar esse comando." );
	
        var Discord = require( "discord.js" );
	    moment = require( "moment" );
	    fs = require( "fs" ),
		user = message.author,
		k = require( "../comandos/avatar.js" ),
	    files = fs.readdirSync( "./comandos/" ),
	    embed = new Discord.RichEmbed(),
	    frases = [ 
		"Dia bom ou dia ruim, não deixa de ser um dia." , 
	    "Já botou uma tesoura na tomada? Eu já..não foi muito legal.",
	    "Já ouvi falar que um humano pode ficar 2 meses sem comer, não sei se é verdade.",
        "E3 2018 foi uma merda.",
	    "Battlefield 5 não é Fortnite com grafico.",
	    "Gosta de jogos em bits? Procure por Celeste, é legal :).",
	    "Não copie o trabalho dos outros, aprenda com eles.",
	    "H",
	    "E",
	    "A vida não vai me fuder se eu fuder minha vida antes ~Feels#1039",
	    "AAAA A A A E O A I E U A O AAAA A AA A.",
	    "O trabalho árduo é capaz de polir as pedras mais asperas ~Kali#3099",
	    "Minha #$*# concentrada pode perfurar rochas ~'Rook#2832",
	    "Lei n° 3 da vida: Eu uma discussão contra uma mulher você NUNCA está certo, exceto se você for traficante. ~Naghlight#7512",
	    "Legal é meu p$# que tá do lado da minha bunda e não me come ~ Honux#6044",
	    "Eu gosto tanto da Cacau-Chan que se ela tivesse um pinto eu chupava ~Noogh#5672",
	    "ze.úserinfo ~Ellus#0666",
	    "ez.infouser ~Kage#3340",
	    "#JovemdaFaculdade ~Moru Zerinho6#6793",
	    "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK ~Victin#5185",
	    "Com quantos neymars se faz um hexa? ~Feels#1039",
	    "Todo mundo pode te desapontar um dia, isso é fato...mas quem escolhe o quanto isso vai te afetar é você ~Moru Zerinho6#6793",
	    "O mundo é tão grande, mas enquanto você pensa sobre isso e não pensa sobre o como as coisas funcionam, você é excluido dele ~Moru Zerinho6#6793"];
		
        try {
			if ( !args[ 0 ] ) {
				embed.setAuthor( " - " + user.username , user.displayAvatarURL );
		        embed.setColor( message.member.displayHexColor );
		        embed.setTimestamp();
		        embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		        embed.setTitle( frases[ Math.floor( Math.random() * ( frases.length - 1 ) ) ] );
		        embed.addField( ":scroll: | Comandos" , ("``" + files.join( ", " ) + "``").replace( /.js/gi, "" ) );
		        embed.addField( ":pen_ballpoint: | Prefix aceitas" , "`" + config.prefixes.join( "` `" ) + "`" );
				if ( message.guild.iconURL ) {
					embed.setThumbnail( message.guild.iconURL );
				}
			    message.channel.send( embed );
			} else if ( args[ 0 ] && files.find( s => args[ 0 ].toLowerCase().includes( s.replace( /.js/gi, "" ) ) ) ) {
				var thing = require( `../comandos/${ args[ 0 ].toLowerCase() }.js` );
		        embed.setAuthor( user.username, user.diaplayAvatarURL );
		        embed.setColor( message.member.displayHexColor );
		        embed.setTimestamp();
		        embed.setFooter( "Zerinho6 Bot™ criado por Moru Zerinho6#6793" );
		        embed.setImage( thing.photo );
		        embed.setTitle( frases[ Math.floor( Math.random() * ( frases.length - 1 ) ) ] );
		        embed.addField( ":book: | Descrição" , thing.description );
                embed.addField( ":pencil: | Uso" , thing.use );
		        embed.addField( ":closed_lock_with_key: | Permissão necessaria", thing.permission ); 
		        if ( message.guild.iconURL ) {
					embed.setThumbnail( message.guild.iconURL );
				}
			    message.channel.send( embed );
	        } else {
		    message.reply( "Esse comando não existe.");
	        }
		} catch ( e ) {
			k.special( message , message.member , e );
		}
	},
	description: "Mostra o manual de ajuda do comando ou os comandos do bot.",
	photo: "https://i.imgur.com/71NcAOS.png",
	permission: "Nenhuma permissão necessaria.",
	use: `${ config.prefixes[ 0 ] }help **ou** ${ config.prefixes[ 0 ] }help comando`
};