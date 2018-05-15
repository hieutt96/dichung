"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = require('app/config/database/mysql/pool');
// import * as pool from 'app/config/database/mysql/pool';
require("./config/database/mysql/pool.ts");
class User_Account {
    constructor(id, partner_id, role_id, username, password, token, disable_api_ids, last_login, created_at, updated_at) {
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
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    rawData() {
        return {
            id: this.id,
            partner_id: this.id,
            role_id: this.role_id,
            username: this.username,
            password: this.password,
            token: this.token,
            disable_api_ids: this.disable_api_ids,
            last_login: this.last_login,
            created_at: this.created_at
        };
    }
}
module.exports = User_Account;
//# sourceMappingURL=user_account.js.map