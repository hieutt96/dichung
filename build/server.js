"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const mongoose = require("mongoose");
const redis = require("redis");
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use('/', (req, res) => {
    res.json("hihi");
});
const MONGODB_URI = 'mongodb://localhost:27017';
mongoose.connect(MONGODB_URI, function (err) {
    if (err)
        throw err;
    console.log("Da ket noi toi mongodb");
});
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "dichung"
});
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected");
});
const client = redis.createClient();
client.on('connect', function (err) {
    if (err)
        throw err;
    console.log("da ket noi toi redis");
});
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
});
