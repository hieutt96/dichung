import { ANotify } from "../base/ANotify";
import { RequestParam } from "../login/requestParam";

class Info extends ANotify{

    token:String;
    param:RequestParam;
    constructor(token:String,param:RequestParam){
        super();
        this.token = token;
        this.param = param;
    }

    validate():void{

    }
    getTokenInfoCache():void{

    }

    execute():void{
        console.log("hieu");
    }

    update():void{
        console.log("hieu");
    }
}