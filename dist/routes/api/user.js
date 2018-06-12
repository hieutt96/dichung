"use strict";
const express = require('express');
const UserController = require('../../controllers/user');
const usercontroller = new UserController();
const router = express.Router();
router.get('/login', usercontroller.getLogIn);
router.post("/login", usercontroller.postLogin);
router.get('/signup', usercontroller.getSignUp);
router.post('/signup', usercontroller.postSignUp);
router.get('/logout', usercontroller.logout);
router.get('/info', usercontroller.getUser);
module.exports = router;
//# sourceMappingURL=user.js.map