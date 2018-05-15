import "./config/database/mysql/pool.ts";

class User_partner{
    id:number;
    rating_partner_id : number;
    name:string;

    constructor(id:number, rating_partner_id:number,name:string){
        this.id = id;
        this.rating_partner_id = rating_partner_id;
        this.name = name;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
}

module.exports = User_partner;