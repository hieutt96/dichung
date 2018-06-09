"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');
const schema = require('./../config/database/mysql/config');
class UserAccount {
    constructor(props) {
        this.id = props.id;
        this.partner_id = props.partner_id;
        this.role_id = props.role_id;
        this.username = props.username;
        if (props.encryptedPassword) {
            this.password = props.encryptedPassword;
        }
        else {
            this.password = bcrypt.hash(props.password);
        }
        this.phone = props.phone;
        this.email = props.email;
        this.token = props.token;
        this.disable_api_ids = props.disable_api_ids;
        this.last_login = props.last_login;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
    }
    static define() {
        let userAccount = schema.define('user_account', {
            id: { type: schema.Number },
            partner_id: { type: schema.Number, "null": true },
            role_id: { type: schema.Number, default: 1 },
            username: { type: schema.Text, "null": false },
            password: { type: schema.Text, "null": false },
            phone: { type: schema.Text, "null": true },
            email: { type: schema.Text, "null": false },
            token: { type: schema.Text, "null": true },
            disable_api_ids: { type: schema.text, "null": true },
            last_login: { type: schema.text, "null": true },
            created_at: { type: schema.Date, "null": true },
            updated_at: { type: schema.Date, "null": true },
        }, {
            primaryKeys: ['id']
        });
        return userAccount;
    }
    static findByUsername(username, callback) {
        let Query = UserAccount.define().findOne();
        Query.where('username', username);
        Query.run({}, function (err, userAccount) {
            if (err)
                throw err;
            if (userAccount) {
                let account = new UserAccount(userAccount);
                callback(null, account);
            }
            else {
                callback(null, null);
            }
        });
    }
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
    ;
    static save(info, callback) {
        let UserAccount = this.define();
        let infoAccount = this.rawData(info);
        console.log(infoAccount);
        UserAccount.findOrCreate({
            email: info.email
        }, info, function (err, account) {
            if (err)
                throw err;
            callback(null, account);
        });
    }
    static rawData(info) {
        info.password = bcrypt.hashSync(info.password);
        info.created_at = moment().utc().format('YYYY-MM-DD HH:mm:ss');
        return info;
    }
}
module.exports = UserAccount;
//# sourceMappingURL=userAccount.js.map