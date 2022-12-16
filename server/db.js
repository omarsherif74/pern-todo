const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    password : 'nitro5Hacker',
    host : 'localhost',
    port : 5432,
    database : 'perntodo'
});

module.exports = pool;