"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ANotify_1 = require("../base/ANotify");
class Info extends ANotify_1.ANotify {
    constructor(token, param) {
        super();
        this.token = token;
        this.param = param;
    }
    validate() {
    }
    getTokenInfoCache() {
    }
    execute() {
        console.log("hieu");
    }
    update() {
        console.log("hieu");
    }
}
//# sourceMappingURL=Info.js.map