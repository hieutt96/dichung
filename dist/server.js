"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const bodyParser = require("body-parser");
// const session = require('express-session');
var passport = require('passport');
const app = express();
dotenv.config({ path: '.env' });
const port = process.env.PORT || 3000;
// app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(passport.initialize());
app.use(passport.session());
app.set('views', path.join(__dirname, "../views"));
app.set('view engine', "pug");
app.set("view options", { layout: true });
const userRoute = require('./routes/api/user');
app.use('/user', userRoute);
app.listen(port, () => {
    console.log("Server is listening at port :" + port);
});
//# sourceMappingURL=server.js.map