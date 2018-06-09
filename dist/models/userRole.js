"use strict";
const pool = require('../config/database/mysql/pool');
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
        return {
            name: this.name
        };
    }
    save() {
    }
}
module.exports = User_role;
//# sourceMappingURL=userRole.js.map