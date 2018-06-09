const pool = require('../config/database/mysql/pool');

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
        return {
            name:this.name
        }
    }

    public save(){
        
    }
}

module.exports = User_role;