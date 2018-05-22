"use strict";
class User_partner_category {
    constructor(props) {
        this.id = props.id;
        this.name = props.name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    rawData() {
        return {
            id: this.id,
            name: this.name
        };
    }
}
module.exports = User_partner_category;
//# sourceMappingURL=user_partner_category.js.map