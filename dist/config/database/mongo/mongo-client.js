"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb = require("mongodb");
const MONGODB_URI = process.env.MONGODB_URI || 'localhost:27017/mydb';
mongodb.connect(MONGODB_URI, function (err) {
    if (err)
        throw err;
    console.log("Da ket noi toi mongodb");
});
module.exports = mongodb;
//# sourceMappingURL=mongo-client.js.map