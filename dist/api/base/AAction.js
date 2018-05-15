"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AAction {
    constructor() {
        this.notifys = new Array();
    }
    responseError(message) {
        throw JSON.stringify({ code: 'error', message: message });
    }
    responseSucess(data) {
        throw JSON.stringify({ code: 'success', data: data });
    }
    attach(notify) {
        this.notifys.push(notify);
    }
    notify() {
        for (var i = 0; i < this.notifys.length; i++) {
            this.notifys[i].update();
        }
    }
}
exports.AAction = AAction;
//# sourceMappingURL=AAction.js.map