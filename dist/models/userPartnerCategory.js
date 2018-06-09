"use strict";
class userPartnerCategory {
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
module.exports = userPartnerCategory;
//# sourceMappingURL=userPartnerCategory.js.map