"use strict";
class User_api {
    constructor(props) {
        this.id = props.id;
        this.category_id = props.category_id;
        this.code = props.code;
        this.name = props.name;
        this.link = props.link;
        this.description = props.description;
    }
    getId() {
        return this.id;
    }
    getCategoryId() {
        return this.category_id;
    }
    getName() {
        return this.name;
    }
}
module.exports = User_api;
//# sourceMappingURL=user_api.js.map