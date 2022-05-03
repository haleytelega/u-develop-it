var express = require('express');
const PORT = process.env.PORT || 3001;
var app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) =>{
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})