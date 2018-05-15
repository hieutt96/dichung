import { Timestamp } from "bson";


class User_api_category{
    id:number;
    name:string;
    created_at:Timestamp;
    updated_at:Timestamp;

    constructor(id:number,name:string,created_at:Timestamp,updated_at:Timestamp){
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
}

module.exports = User_api_category;