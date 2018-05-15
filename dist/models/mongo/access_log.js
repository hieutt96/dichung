"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bson_1 = require("bson");
const Schema = mongoose.Schema;
const AccessLogSchema = new Schema({
    user_id: { type: Number },
    username: { type: String },
    module: { type: String },
    action: { type: String },
    ip: { type: String },
    uri: { type: String },
    params: { type: String },
    created_at: { type: bson_1.Timestamp }
});
module.exports = mongoose.model('Access_Log', AccessLogSchema);
//# sourceMappingURL=access_log.js.map