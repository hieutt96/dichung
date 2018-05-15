"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class User_partner {
    constructor(id, rating_partner_id, name) {
        this.id = id;
        this.rating_partner_id = rating_partner_id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
module.exports = User_partner;
//# sourceMappingURL=user_partner.js.map