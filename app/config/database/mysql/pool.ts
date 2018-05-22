import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config({path : '.env'});

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    multipleStatements : true   
});

console.log("Connected MYSQL");
console.log(process.env.DB_HOST);
module.exports = pool;