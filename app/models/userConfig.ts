import { Timestamp } from "bson";

class userConfig{
    code:string;
    val_vn:string;
    val_en:string;
    val_cn:string;
    avail_from:string;
    created_at:Timestamp;
    updated_at:Timestamp;

    constructor(props:any){
        this.code = props.code;
        this.val_vn = props.val_vn;
        this.val_en = props.val_en;
        this.val_cn = props.val_cn;
        this.avail_from = props.avail_from;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
    }
}

module.exports = userConfig;