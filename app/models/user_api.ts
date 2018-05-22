
class User_api{
    id:number;
    category_id:number;
    code:string;
    name:string;
    link:string;
    description:string;

    constructor(props:any){
        this.id = props.id;
        this.category_id = props.category_id;
        this.code = props.code;
        this.name = props.name;
        this.link = props.link;
        this.description = props.description;
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