"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_account_1 = require("../models/user_account");
const Utils = require('../utils/utils');
class UserController {
    // constructor(){
    // }
    getLogIn(req, res, next) {
        res.render("user/login");
    }
    postLogin(req, res) {
        let keys = ['username', 'password'];
        let utils = new Utils();
        let exists = utils.checkKeysNotExists(req.body, keys);
        if (exists !== -1) {
            return res.status(400).json({
                errCode: -1,
                msg: 'Missing argument ' + keys[exists]
            });
        }
        let username = req.body.username;
        let password = req.body.password;
    }
    getSignUp(req, res) {
        res.render('user/signup');
    }
    postSignUp(req, res) {
        let keys = ['username', 'password', 'email', 'phone'];
        let utils = new Utils();
        let exists = utils.checkKeysNotExists(req.body, keys);
        if (exists !== -1) {
            return res.status(400).json({
                errCode: -1,
                msg: 'Missing argument ' + keys[exists]
            });
        }
        if (!(utils.checkEmail(req.body.email))) {
            return res.status(400).json({
                errCode: -1,
                msg: 'Invalid email format'
            });
        }
        if (!(utils.checkPhone(req.body.phone))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Phone Invalid"
            });
        }
        if (!(utils.checkPassword(req.body.password))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Password qua ngan"
            });
        }
        let info = {
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            email: req.body.email
        };
        user_account_1.User_Account.findByUsername(info.username, (err, userAcconunt) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    errCode: 500,
                    msg: 'Internal error'
                });
            }
            if (userAcconunt) {
                return res.status(400).json({
                    errCode: -2,
                    msg: 'Username already exists'
                });
            }
            else {
                let userAcconunt = new user_account_1.User_Account(info);
                userAcconunt.save((err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.json({ success: "Success" });
                    }
                });
            }
        });
    }
}
module.exports = UserController;
//# sourceMappingURL=user.js.map