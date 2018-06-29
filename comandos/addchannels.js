var config = require( "../config.json" );
module.exports = {
	run: ( bot, message , args ) => {
	if ( !message.member.hasPermission( "MANAGE_CHANNELS" ) ) return message.reply( "Você precisa da permissão de gerenciar canais para executar esse comando." );
        if ( !message.guild.member( bot.user.id ).hasPermission( "MANAGE_CHANNELS" ) ) return message.reply( "Eu preciso da permissão de gerenciar canais para executar esse comando." );
    
        function wait( channel , options , sim , nao , nada , string_sim , string_nao ) {
            channel.awaitMessages( msg => [ string_sim, string_nao ].includes( msg.content ), options )
                .catch( nada )
                .then( ( msgs ) => {
                    var msg = msgs.first();
                    if( msg.content === string_sim ) sim( msg )
                    else nao( msg )
                });
        };
	
	message.channel.send( "Deseja criar uma categoria?" );
	var k = require( "../comandos/avatar.js" ),
	config = require( "../config.json" ),
        wait(message.channel, { max:1 , time:10000 , errors:[ "time" ] }, 
        ( msg ) => {
            message.reply( "Qual vai ser o nome da categoria?" );
            message.channel.awaitMessages( a => a.author.id === message.author.id, { max: 1 , time: 10000, errors: [ "time" ] } ).then(c => {
                try {
		    message.guild.createChannel( c.first().content , "category", [{
			id: message.guild.id,
                        allow: [ "READ_MESSAGES" , "READ_MESSAGE_HISTORY" ]
                    }]);
                    message.reply( "Categoria criada." );
                } catch ( e ) {
                    k.special( message , message.member , e );
                }
            });
        },
        ( msg ) => {
            message.reply( "Deseja criar um canal?" );
            wait( message.channel , { max:1 , time:10000, errors:[ "time" ] }, 
			
            ( msg ) => {
                message.reply( "Qual vai ser o nome do canal?" );
                message.channel.awaitMessages( message.channel , { max: 1 , time: 10000, errors: [ "time" ] } ).then(c => {
                    try { //WARNING!!! This part do not work! It makes the bot crash!
		        message.guild.createChannel( c.first().content , "text" );
                        message.reply( "Canal criado." );
                    } catch ( e ) {
                        k.special( message , message.member , e );
                    }
                });
            },
			
            ( msg ) => {
                message.reply( "Então não tenho mais nada a fazer, até mais." );
            },
			
            ( msg ) => {
                 message.reply( "Muito tempo sem resposta..cancelado." );
            }, "sim" , "não" );
			
        },
        ( msg ) => {
            message.reply( "Muito tempo sem resposta..cancelado." );
        }, "sim" , "não" );
	},
	description: "Te da a opção de criar(ou não) canais de texto ou categorias.",
	photo: "https://i.imgur.com/6h39Lr3.png",
	permission: "MANAGE_CHANNELS",
	use: `${ config.prefixes[ 0 ] }server, depois você vai responder uma serie de perguntas com "sim" ou "não"`
};
