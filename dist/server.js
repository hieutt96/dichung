"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server is listening at port :" + port);
});
//# sourceMappingURL=server.js.map