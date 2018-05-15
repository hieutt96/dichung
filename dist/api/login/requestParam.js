"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestParam {
    constructor(username, password, ip, deviceip) {
        this.username = username;
        this.password = password;
        this.ip = ip;
        this.deviceid = deviceip;
    }
    setUsername(username) {
        this.username = username;
    }
    getUsername() {
        return this.username;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
    setIp(ip) {
        this.ip = ip;
    }
    getIp() {
        return this.ip;
    }
    setDeviceIp(deviceip) {
        this.deviceid = deviceip;
    }
    getDeviceIp() {
        return this.deviceid;
    }
}
exports.RequestParam = RequestParam;
//# sourceMappingURL=requestParam.js.map