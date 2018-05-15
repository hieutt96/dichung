
class User_api{
    id:number;
    category_id:number;
    code:string;
    name:string;
    link:string;
    description:string;

    constructor(id:number,category_id:number,code:string,name:string,link:string,description:string){
        this.id = id;
        this.category_id = category_id;
        this.code = code;
        this.name = name;
        this.link = link;
        this.description = description;
    }

    getId():number{
        return this.id;
    }
    
    getCategoryId():number{
        return this.category_id;
    }

    getName():string{
        return this.name;
    }
}

module.exports = User_api;