import { Timestamp } from "bson";


class User_api_category{
    id:number;
    name:string;
    created_at:Timestamp;
    updated_at:Timestamp;

    constructor(props:any){
        this.id = props.id;
        this.name = props.name;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
}

module.exports = User_api_category;