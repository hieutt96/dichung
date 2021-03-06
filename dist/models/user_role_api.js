"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class User_role_api {
    constructor(id, role_id, api_id) {
        this.id = id;
        this.role_id = role_id;
        this.api_id = api_id;
    }
    getId() {
        return this.id;
    }
    getRoleId() {
        return this.role_id;
    }
    getApiId() {
        return this.api_id;
    }
}
module.exports = User_role_api;
//# sourceMappingURL=user_role_api.js.map