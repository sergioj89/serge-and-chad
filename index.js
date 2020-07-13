const typeorm = require('typeorm');

async function connect() {
    const connection = await typeorm.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "psql",
        database: "api_wars"
    });

    const players = await connection.query("SELECT * FROM player");
    console.log(players);
}

connect();