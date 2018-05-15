import * as mongoose from 'mongoose';
import { Timestamp } from 'bson';

const Schema = mongoose.Schema;

const AccessLogSchema = new Schema({
    user_id: { type:Number },
    username: { type:String },
    module: { type:String },
    action: { type:String },
    ip: { type:String },
    uri: { type:String },
    params: { type:String },
    created_at: { type:Timestamp}
});

module.exports = mongoose.model('Access_Log',AccessLogSchema);

