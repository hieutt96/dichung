import "./config/database/mysql/pool.ts";

class User_role{
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }

    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    rawData():any{

    }
}

module.exports = User_role;