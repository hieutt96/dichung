"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class UserRoleApi {
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
module.exports = UserRoleApi;
//# sourceMappingURL=UserRoleApi.js.map