"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema = require('./../config/database/mysql/config');
class UserApi {
    static define() {
        let userApi = schema.define('user_api', {
            id: { type: schema.Number },
            category_id: { type: schema.Number },
            code: { type: schema.Number },
            name: { type: schema.Text },
            link: { type: schema.Text },
            description: { type: schema.Text }
        });
    }
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
exports.UserApi = UserApi;
//# sourceMappingURL=userApi.js.map