import "./config/database/mysql/pool.ts";

class User_role_api{
    id:number;
    role_id:number;
    api_id:number;

    constructor(id:number,role_id:number,api_id:number){
        this.id = id;
        this.role_id = role_id;
        this.api_id = api_id;
    }

    getId():number{
        return this.id;
    }

    getRoleId():number{
        return this.role_id;
    }
    
    getApiId():number{
        return this.api_id;
    }
}

module.exports = User_role_api;