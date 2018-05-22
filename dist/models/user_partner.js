"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/database/mysql/pool.ts");
class User_partner {
    constructor(props) {
        this.id = props.id;
        this.rating_partner_id = props.rating_partner_id;
        this.name = props.name;
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