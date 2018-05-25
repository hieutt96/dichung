"use strict";
class Utils {
    checkKeysNotExists(obj, keys) {
        if (Array.isArray(keys)) {
            for (let i = 0; i < keys.length; i++) {
                if (!(keys[i] in obj)) {
                    return i;
                }
            }
        }
        else if (!(keys in obj)) {
            return 0;
        }
        return -1;
    }
    checkEmail(email) {
        const reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return reg.test(email);
    }
    checkUsername(username) {
        const reg = /\w{6,15}/;
        return reg.test(username);
    }
    checkPhone(phone) {
        const reg = /^\d{8,15}$/;
        return reg.test(phone);
    }
    checkPassword(password) {
        if (password.length > 6) {
            return true;
        }
        return false;
    }
}
module.exports = Utils;
//# sourceMappingURL=utils.js.map