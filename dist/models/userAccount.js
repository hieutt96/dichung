"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');
const User = require('../models/schema/userAccount');
class UserAccount {
    constructor(props) {
        this.id = props.id;
        this.partner_id = props.partner_id;
        this.role_id = props.role_id;
        this.username = props.username;
        // if(props.encryptedPassword){
        //     this.password = props.encryptedPassword;
        // }else{
        //     this.password = bcrypt.hash(props.password);
        // }
        this.password = props.password;
        this.phone = props.phone;
        this.email = props.email;
        this.token = props.token;
        this.disable_api_ids = props.disable_api_ids;
        this.last_login = props.last_login;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
    }
    static findByUsername(username, callback) {
        User.findOne({ where: { 'username': username } }, function (err, userAccount) {
            if (err) {
                return callback(null, null);
            }
            ;
            if (userAccount) {
                return callback(null, userAccount);
            }
            else {
                return callback(null, null);
            }
        });
    }
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
    ;
    static save(info, callback) {
        let infoAccount = this.rawData(info);
        console.log(infoAccount);
        User.create(info, function (err, account) {
            if (err)
                throw err;
            return callback(null, account);
        });
    }
    static rawData(info) {
        info.password = bcrypt.hashSync(info.password);
        info.created_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
        return info;
    }
    static getUser(callback) {
        User.all({}, (err, users) => {
            if (err)
                throw err;
            if (users) {
                callback(null, users);
            }
            else {
                callback(null, null);
            }
        });
    }
}
module.exports = UserAccount;
//# sourceMappingURL=userAccount.js.map