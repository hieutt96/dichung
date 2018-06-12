"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
const config = {
    driver: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
console.log("Connected MYSQL");
console.log(process.env.DB_HOST);
module.exports = config;
//# sourceMappingURL=config.js.map