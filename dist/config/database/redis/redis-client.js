"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis = require("redis");
const client = redis.createClient();
client.on('error', (err) => {
    console.log(err);
});
client.on('connect', (connect) => {
    console.log("Connected Redis");
});
module.exports = client;
//# sourceMappingURL=redis-client.js.map