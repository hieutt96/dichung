"use strict";
class UserApi {
    constructor(id, category_id, code, name, link, description) {
        this.id = id;
        this.category_id = category_id;
        this.code = code;
        this.name = name;
        this.link = link;
        this.description = description;
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
module.exports = UserApi;
//# sourceMappingURL=UserApi.js.map