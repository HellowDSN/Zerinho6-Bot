"use strict";
const Discord = require( "discord.js" ),
fs = require( "fs" ),
moment = require( "moment" ),
chalk = require( "chalk" );
var bot = new Discord.Client(),
config = require( "./config.json" );
moment().format();
moment.locale( "pt-BR" );
console.log( moment.locale() );

fs.readdir( "./eventos/" , ( err, files ) => {

    if ( err ) {
      throw err;
    };

    files.forEach( ( file ) => {
        try{
          bot.on( file.replace( /.js/gi, "" ) , require( "./eventos/" + file ).run );
          console.log( chalk.green( file + " Carregado." ) );
        } catch( e ) {
          console.error( chalk.red( "Erro ao carregar o evento " + file , e ) );
        }
    }); 
});

bot.login( config.token );
