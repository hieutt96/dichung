import * as redis from 'redis';

const client = redis.createClient();

client.on('error',(err)=>{
    console.log(err);
});

client.on('connect',(connect)=>{
    console.log("Connected Redis");
});

module.exports = client;