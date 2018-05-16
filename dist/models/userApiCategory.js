"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserApiCategory {
    constructor(id, name, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
module.exports = UserApiCategory;
//# sourceMappingURL=UserApiCategory.js.map