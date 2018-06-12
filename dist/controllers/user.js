"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils = require('../utils/utils');
const UserAccountModel = require('../models/userAccount');
class UserController {
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
        if (!(utils.checkUsername(req.body.username))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Username invalid"
            });
        }
        let info = {
            username: req.body.username,
            password: req.body.password,
        };
        UserAccountModel.findByUsername(info.username, (err, userAccount) => {
            if (err) {
                console.log(err);
                return res.json({
                    errCode: -1,
                    msg: "Error",
                });
            }
            if (userAccount) {
                // console.log(userAccount.username);
                // console.log(typeof(userAccount.username));
                let UserAccount = new UserAccountModel(userAccount);
                // console.log(1);
                if (UserAccount.comparePassword(info.password)) {
                    return res.json({ success: "Success" });
                }
                else {
                    return res.status(400).json({
                        errCode: -1,
                        msg: "Password Mismatch"
                    });
                }
            }
            else {
                return res.json({
                    errCode: -1,
                    msg: "No find username match"
                });
            }
        });
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
        if (!(utils.checkUsername(req.body.username))) {
            return res.status(400).json({
                errCode: -1,
                msg: "Username Invaild"
            });
        }
        let info = {
            username: req.body.username,
            password: req.body.password,
            phone: req.body.phone,
            email: req.body.email,
            partner_id: (req.body.partner_id) ? req.body.partner_id : null,
            role_id: 1,
            token: (req.body.token) ? req.body.token : null,
            disable_api_ids: (req.body.disable_api_ids) ? req.body.disable_api_ids : null,
            last_login: null,
            created_at: null,
            updated_at: null
        };
        UserAccountModel.findByUsername(info.username, (err, userAccount) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    errCode: 500,
                    msg: 'Internal error'
                });
            }
            console.log("hieu");
            if (userAccount) {
                return res.status(400).json({
                    errCode: -2,
                    msg: 'Username already exists'
                });
            }
            else {
                UserAccountModel.save(info, (err, account) => {
                    if (err) {
                        throw err;
                    }
                    else {
                        res.json({ success: "Success" });
                    }
                });
            }
        });
    }
    logout(req, res) {
        // req.session.destroy();
        //     req.clearCookie;
        //     return res.json({
        //         errCode:0,
        //         data:{}
        //     });
    }
    getUser() {
        // User.all({},(err:any,users:any)=>{
        //     if(err) throw err;
        //     if(users){
        //         console.log(users);
        //     }else{
        //         console.log("hihi");
        //     }
        // }); 
    }
    ;
}
module.exports = UserController;
//# sourceMappingURL=user.js.map