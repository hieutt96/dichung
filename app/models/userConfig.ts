import { Timestamp } from "bson";

class UserConfig{
    code:string;
    val_vn:string;
    val_en:string;
    val_cn:string;
    avail_from:string;
    created_at:Timestamp;
    updated_at:Timestamp;

    constructor(code:string,val_vn:string,val_en:string,val_cn:string,avail_from:string,created_at:Timestamp,updated_at:Timestamp){
        this.code = code;
        this.val_vn = val_vn;
        this.val_en = val_en;
        this.val_cn = val_cn;
        this.avail_from = avail_from;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

module.exports = UserConfig;