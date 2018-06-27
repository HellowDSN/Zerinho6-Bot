var config = require( "../config.json" );
module.exports = {
	run: ( bot , message , args ) => {
		if( message.author.id === config.dono ) {
			if( args[ 0 ] < 1 ) {
				message.channel.send( "Ops, cade o nome do comando seu lezado?" ); 
			} else {
				try {
					delete require.cache[ require.resolve( `./${args[0]}.js` ) ];
    	                                message.channel.send( "Comando resetado." ); 
				} catch ( e ) {
					var k = require( "../comandos/avatar.js" );
					k.special( message , message.member , e );
				}
			}
		} else {
			message.channel.send( "Este comando é privado, para saber quando um comando é privado ou precisa de uma permissão adicional de cargo, execute **" + config.prefixes[ 0 ] + "comando**" );
		}
	},
	description: "Recarrega um comando.",
	photo: "https://i.imgur.com/gK6S7VH.png",
	permission: "Bot Owner",
	use: `${ config.prefixes[ 0 ] }reload comando`
};
