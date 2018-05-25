"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require('bcrypt');
const moment = require('moment');
// const pool = require('app/config/database/mysql/pool');
// import * as pool from 'app/config/database/mysql/pool';
const pool = require('../config/database/mysql/pool');
class User_Account {
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
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
    rawData() {
        return {
            // id:this.id,
            // partner_id:this.id,
            // role_id:this.role_id,
            username: this.username,
            email: this.email,
            phone: this.phone,
        };
    }
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
    save(callback) {
        pool.getConnection((err, conn) => {
            if (err)
                throw err;
            let query = 'insert into `user_account` set ?';
            let admin = Object.assign({}, this.rawData(), { password: this.password }, { role_id: 1 }, { created_at: moment().utc().format('YYYY-MM-DD HH:mm:ss') });
            conn.query(query, [admin], (err, results) => {
                conn.release();
                if (err)
                    return callback(err);
                this.id = results.insertId;
                callback(null);
            });
        });
    }
    // static findById(id:Number,callback:Function){
    //     const connection = pool.connect();
    //     const query = connection.query('select * from `user_account` where id=?',[id],function(err:any,results:any){
    //         if(err) throw err;
    //         return results;
    //         connection.release();
    //     });
    // }
    static findByUsername(username, callback) {
        pool.getConnection(function (err, conn) {
            if (err)
                callback(err);
            conn.query('select * from `user_account` where username=?', [username], function (err, results) {
                if (err) {
                    return "Couldnt get a connection";
                }
                ;
                if (!results[0]) {
                    return callback(null, null);
                }
                let info = Object.assign({}, results[0], { encryptedPassword: results[0].password });
                let userAccount = new User_Account(info);
                return callback(null, userAccount);
            });
        });
        // const query = connection.query('select * from `user_name` where username=?',[username],(err:any,results:any)=>{
        //     if(err) throw err;
        //     return results;
        // });
    }
}
exports.User_Account = User_Account;
// module.exports = User_Account;
//# sourceMappingURL=user_account.js.map