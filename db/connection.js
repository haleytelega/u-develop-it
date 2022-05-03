const mysql = require('mysql2');
//connect the application to the MySQL db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'BlueTowelCats9*',
        database: 'election'
    },
    console.log('Connected to the election database.')
    );

module.exports = db;