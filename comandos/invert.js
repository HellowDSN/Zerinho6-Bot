var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		const Jimp = require( "jimp" ),
		Discord = require( "discord.js" );
		fs = require( "fs" ),
		pixelUtil = require( "pixel-util" );
		var helper = require( "../helper.js" );
		
		var image = helper.get_image( message );
		if ( !( !image ) ) {
			pixelUtil.createBuffer( image ).then( function ( buffer ) {
				Jimp.read( buffer , function ( e , img ) {
					
					if ( e ) {
						throw e;
					}
					
					img.invert();
					img.getBuffer( Jimp.MIME_PNG , ( e , bro ) => {
						message.channel.send( new Discord.Attachment( bro ) );
					});
				});
			});			
		}
	},
	description: "Inverte as cores de uma imagem.",
	photo: "https://i.imgur.com/J7VaMMb.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }invert link_da_imagem (ou envie uma imagem junto com o comando)`
};
