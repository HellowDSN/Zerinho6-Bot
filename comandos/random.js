var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
		
		function int_or_float( type, max ) {
			if ( type === "int" ) {
				return "Resultado: " + parseInt( Math.random() * max );
			}
			if ( type === "float" ) {
				var transformed = parseFloat( max );
				return "Resultado: " + Math.random() * transformed;
			}
		};
		
		var k = require( "../comandos/avatar.js" );
		if ( args[ 0 ] && args[ 1 ] ) {
			if ( !isNaN( args[ 0 ] ) ) {
				if ( args[ 1 ].toLowerCase() === "int" || args[ 1 ].toLowerCase() === "float" ) {
					try {
						message.channel.send( int_or_float( args[ 1 ] , args[ 0 ] ) );
					} catch ( e ) {
						k.special( message , message.member , e );
					}
				} else {
					message.reply( "As unicas opções são 'int' ou 'float'." );
			    }
			} else {
				message.reply( "Um numeral por favor." );
		    }
		} else if ( args [ 0 ] ) {
			if ( !isNaN( args[ 0 ] ) ) {
				try {
					message.reply( "Só lembrando, você pode definir se quer o resultado em Int ou Float, como você não definiu o resultado ele vai ser Int." );
			                message.channel.send( "Resultado: " + parseInt( Math.random() * args[ 0 ] ) );
				} catch ( e ) {
				    k.special( message , message.member , e );
				}
			}
		} else {
			try {
				message.reply( "Só lembrando, você pode mudar o multiplicador maximo e ainda se o resultado deve ser em Int ou Float, como você não definiu o multiplicador maximo vai ser 100 tipo Int ,para mais informações veja o comando de ajuda." );
				message.channel.send( "Resultado: " + parseInt( Math.random() * 100 ) );
			} catch ( e ) {
				k.special( message , message.member , e );
			}
		}
	},
	description: "Retorna um numero random inteiro de ate 100, mas você pode mudar o limite queira.",
	photo: "https://i.imgur.com/a6tQBXE.png",
	permission: "Nenhuma permissão necessaria",
	use: `${ config.prefixes[ 0 ] }random ou ${ config.prefixes[ 0 ] }random multiplicador maximo`
};
