import { Timestamp } from "bson";
const bcrypt = require('bcrypt');
// const pool = require('app/config/database/mysql/pool');
// import * as pool from 'app/config/database/mysql/pool';

const pool = require('../config/database/mysql/pool');

export class User_Account{
    id: number;
    partner_id:number;
    role_id:number;
    username:string;
    password:string;
    phone:String;
    email:String;
    token:string;
    disable_api_ids:string;
    last_login:string;
    created_at:Timestamp;
    updated_at:Timestamp;
    constructor(props:any){
        this.id = props.id;
        this.partner_id = props.partner_id;
        this.role_id = props.role_id;
        this.username = props.username;
        if(props.encryptedPassword){
            this.password = props.encryptedPassword;
        }else{
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

    getId():number{
        return this.id;
    }

    getUsername():string{
        return this.username;
    }

    getPhone(){
        return this.phone;
    }

    getEmail(){
        return this.email;
    }

    rawData():any{
        return{
            // id:this.id,
            // partner_id:this.id,
            // role_id:this.role_id,
            username:this.username,
            email:this.email,
            phone:this.phone,
            // token:this.token,
            // disable_api_ids:this.disable_api_ids,
            // last_login:this.last_login,
            // created_at:this.created_at
        }
    }
    public save(callback:Function){
        let userAccount = Object.assign({},this.rawData(),{password:this.password});
        pool.getConnection((err:any,conn:any)=>{
            if(err) throw err;
            let query = 'insert into `user_account` set ?';
            let admin = Object.assign({}, this.rawData(), { password: this.password });
            conn.query(query, [admin], (err:any, results:any) => {
                conn.release();
                if (err) return callback(err);
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

    static findByUsername(username:string,callback:Function){
        pool.getConnection(function(err:any,conn:any){
            if(err) callback(err);
            conn.query('select * from `user_account` where username=?',[username],function(err:any,results:any){
                if(err) {
                    return "Couldnt get a connection";
                };
                console.log(1);
                if(!results[0] ){
                    return callback(null,null);
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

    // static findByEmail(email:string,callback:Function){
    //     pool.getConnection((err:any,conn:any)=>{
    //         if(err) throw err;
    //         let query = 'select * from `user_account` where email=?';
    //         conn.query(query,[email],(err:any,results:any)=>{
    //             if(err) throw err;
    //             if(!results[0]){
    //                 return callback(err);
    //             }
    //             let info = Object.assign({},results[0]);
    //             let user_account = new User_Account(info);
    //             return callback(null,user_account);
    //         })
    //     });
    // }
}

// module.exports = User_Account;