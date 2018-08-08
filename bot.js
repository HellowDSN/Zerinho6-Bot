"use strict";
const Discord = require( "discord.js" ),
moment = require( "moment" ),
chalk = require( "chalk" ),
fs = require( "fs" ),
ini = require( "ini" );
var bot = new Discord.Client(),
config = require( "./config.json" ),
language = config.language,
language = ini.parse( fs.readFileSync( "./languages/" + language + ".ini" , "utf-8" ) );

console.log( language.StartLanguage + " " + moment.locale() );

fs.readdir( "./eventos/" , ( err, files ) => {

    if ( err ) {
      throw err;
    };

    files.forEach( ( file ) => {
        try{
          bot.on( file.replace( /.js/gi, "" ) , require( "./eventos/" + file).run );
          console.log( chalk.green( file + language.Loaded ) );
        } catch( e ) {
          console.error( chalk.red( language.LoadEventError + file , e ) );
        }
    }); 
});

bot.login( config.token );
