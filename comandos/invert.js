module.exports = {
	run: ( bot , message , args , language ) => {
		const Jimp = require( "jimp" ),
		Discord = require( "discord.js" ),
		fs = require( "fs" ),
		pixelUtil = require( "pixel-util" );
		var helper = require( "../helper.js" ),
		image = helper.get_image( message );

		if ( image ) {
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
	}
};
