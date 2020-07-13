const typeorm = require('typeorm');
const express = require('express');
async function connect() {
    const connection = await typeorm.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "psql",
        database: "postgres"
    });

    const players = await connection.query("SELECT * FROM player");
    console.log(players);
}

connect();
const app = express();
app.listen(9999, ()=>{
    console.log("Hello");
});