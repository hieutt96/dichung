"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
// const Global.__base = process.cwd + '/';
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send("hihi");
});
app.listen(port, () => {
    console.log("Server is listening at port :" + port);
    console.log(process.env.MONGODB_URI);
    // console.log(process.cwd);
});
//# sourceMappingURL=server.js.map