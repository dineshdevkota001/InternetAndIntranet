const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'dinesh',
    password: 'hsenid',
    connectionLimit: 5
});

async function runQuery(database, query){
    let conn;
    try{
        conn = await database.getConnection();
        console.log("Connected!");
        const output = await conn.query(query);
        console.log(output);
    }
    catch(err){
        throw err;
    }finally {
        conn.end()
        return output
    }
}

function createDatabase(database){
    let query = 1;
    runQuery(database, query);
}

x= createDatabase(pool)
