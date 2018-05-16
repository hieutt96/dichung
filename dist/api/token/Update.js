"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AAction_1 = require("../base/AAction");
class Update extends AAction_1.AAction {
    constructor(token, user) {
        super();
        this.token = token;
        this.user = user;
    }
    validate() {
        console.log('');
    }
    db(token) {
    }
    execute() {
        console.log('');
    }
}
exports.Update = Update;
//# sourceMappingURL=Update.js.map