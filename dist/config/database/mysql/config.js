"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
var caminte = require('caminte');
var Schema = caminte.Schema;
const config = {
    driver: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
var schema = new Schema(config.driver, config);
console.log("Connected MYSQL");
console.log(process.env.DB_HOST);
module.exports = schema;
//# sourceMappingURL=config.js.map