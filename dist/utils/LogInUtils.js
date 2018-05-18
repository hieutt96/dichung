"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogInUtils {
}
LogInUtils.checkKeysNotExists = (obj, keys) => {
    if (Array.isArray(keys)) {
        for (let i = 0; i < keys.length; i++) {
            let temp = keys[i];
            if (!(temp in obj)) {
                return i;
            }
        }
    }
    else if (!(keys in obj)) {
        return 0;
    }
    return -1;
};
exports.LogInUtils = LogInUtils;
//# sourceMappingURL=LogInUtils.js.map