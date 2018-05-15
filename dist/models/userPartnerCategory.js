"use strict";
class UserPartnerCategory {
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
            id: this.id,
            name: this.name
        };
    }
}
module.exports = UserPartnerCategory;
//# sourceMappingURL=userPartnerCategory.js.map