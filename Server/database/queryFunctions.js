pool = require('./pool')

async function runQuery(query,params){
    let conn;
    try{
        conn = await pool.getConnection();
        console.log('Connected!')
        var res = await conn.query(query,params);
    }catch(err){
        console.log(err)
    }finally {
        if (conn) conn.end()
        return res
    }
}

async function bulkQuery(query, classlist){
    Object.values[classslist]
}

module.exports = runQuery