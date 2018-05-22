import "./config/database/mysql/pool.ts";

class User_partner{
    id:number;
    rating_partner_id : number;
    name:string;

    constructor(props:any){
        this.id = props.id;
        this.rating_partner_id = props.rating_partner_id;
        this.name = props.name;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
}

module.exports = User_partner;