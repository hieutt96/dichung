import { Timestamp } from "bson";

// const pool = require('app/config/database/mysql/pool');
// import * as pool from 'app/config/database/mysql/pool';

import "./config/database/mysql/pool.ts";

export class UserAccount{
    id: number;
    partner_id:number;
    role_id:number;
    username:string;
    password:string;
    token:string;
    disable_api_ids:string;
    last_login:string;
    created_at:Timestamp;
    updated_at:Timestamp;
    constructor(id:number,partner_id:number,role_id:number,username:string,password:string,token:string,disable_api_ids:string,last_login:string,created_at:Timestamp,updated_at:Timestamp){
        this.id = id;
        this.partner_id = partner_id;
        this.role_id = role_id;
        this.username = username;
        this.password = password;
        this.token = token;
        this.disable_api_ids = disable_api_ids;
        this.last_login = last_login;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    getId():number{
        return this.id;
    }

    getUsername():string{
        return this.username;
    }

    rawData():any{
        return{
            id:this.id,
            partner_id:this.id,
            role_id:this.role_id,
            username:this.username,
            password:this.password,
            token:this.token,
            disable_api_ids:this.disable_api_ids,
            last_login:this.last_login,
            created_at:this.created_at
        }
    }
}
