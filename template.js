var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		var helper = require( "../helper.js" );
		try {
			
		} catch ( e ) {
			helper.error_message( message , message.member , e );
		}
	},
	description: "Descrição do comando",
	photo: "Link da imagem",
	permission: "Permissão necessaria para executar o comando",
	use: `${ config.prefixes[ 0 ] }Como o comando deve ser usado`
};
