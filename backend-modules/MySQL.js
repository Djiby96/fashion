/*
    1. CE FICHIER VA CONTENIR L'OBJET DE CONNEXION MYSQL
*/

var mysql = require('mysql');

var con = mysql.createPool({
    connectionLimit: 9000,
    host: "localhost",
    user: "Djiby",
    password: "Djiby_Sarr_1996",
    database:"product",
    port: 3306,
    multipleStatements:true
});


module.exports = con;


/* Clever cloud

H:bbwwsahweyzbgikzshnp-mysql.services.clever-cloud.com
U:ucqkfpt23is8atb7
P:IMqQFvT4J7adJe8znpO5
D:bbwwsahweyzbgikzshnp

*/