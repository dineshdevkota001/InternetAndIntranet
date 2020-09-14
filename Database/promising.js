const mariadb = require('mariadb')
mariadb.createConnection({
    host: 'localhost',
    user: 'dinesh',
    password: 'hsenid',
    database: '3Dviewer'
    // socketPath: '/tmp/mysql.sock'
})
.then(conn=>{
    module.exports.conn = conn
    conn.query('Create table something(id int)',(err,rows, fields) => {
    if (err) console.log(err)
})  
})
.catch(err=>{
    console.log('ERROR!!'+err);
})
