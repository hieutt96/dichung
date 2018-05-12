import * as express from 'express' ;
import * as dotenv from "dotenv";
import { createConnection, MongoClient } from "typeorm";
import * as mysql from "mysql";
import * as mongoose from 'mongoose';
import * as redis from "redis";
dotenv.config();

const port = process.env.PORT||3000;
const app: express.Application = express();

app.use('/',(req,res) => {
    res.json("hihi");
});

const MONGODB_URI = 'mongodb://localhost:27017';

mongoose.connect(MONGODB_URI, function(err){
    if(err) throw err;
    console.log("Da ket noi toi mongodb");
});

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"dichung"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
});

const client = redis.createClient();
client.on('connect',function(err){
    if(err) throw err;
    console.log("da ket noi toi redis");
});

app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}/`);
});