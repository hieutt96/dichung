"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class User_role {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    rawData() {
    }
}
module.exports = User_role;
//# sourceMappingURL=user_role.js.map