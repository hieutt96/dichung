"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class UserRole {
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
module.exports = UserRole;
//# sourceMappingURL=UserRole.js.map