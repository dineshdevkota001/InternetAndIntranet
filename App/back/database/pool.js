const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'dinesh',
    password: 'hsenid',
    connectionLimit: 5,
    database: "viewer",
    multipleStatements: true
});

module.exports = pool