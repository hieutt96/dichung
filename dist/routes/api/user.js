"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const UserController_1 = require("../../controllers/user/UserController");
const router = express.Router();
const usercontroller = new UserController_1.UserController();
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', (req, res) => {
    console.log(req.body);
});
module.exports = router;
//# sourceMappingURL=user.js.map