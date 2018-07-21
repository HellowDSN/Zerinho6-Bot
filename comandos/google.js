var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		var argument = message.content.split( " " ).slice( 1 ).join( " " ),
		google = require( "google" );
		
		if ( argument ) {
			
			google( argument , function ( e , res ) {
				
				var i = 0,
				helper = require( "../helper.js" );
				
				if ( e ) {
					message.reply( "Provavelmente sem resultados ou ocorreu um erro.\n" + e );
				}
				
				while ( res.links[ i ] === null ) {
					i++
				}
				
				if ( res.links[ i ] === undefined ) {
					message.reply( "Sua pesquisa não teve resultados" );
				}
				
				message.channel.send( "Resultado para " + helper.bold( argument ) + "\n\n" + res.links[ i ].title + "\n" + res.links[ i ].href );
				
			});
		}
	},
	description: "Faz um pesquisa no google.",
	photo: "https://i.imgur.com/hccuBVv.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }google conteudo a pesquisar`
};
