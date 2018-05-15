

class UserPartnerCategory{
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
        return{
            id:this.id,
            name:this.name
        }
    }
}

module.exports = UserPartnerCategory;