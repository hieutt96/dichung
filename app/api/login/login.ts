import { RequestParam } from "./requestParam";
import { Db } from "./db";

export class Login{
    private param:RequestParam;
    private db:Db;

    constructor(param:RequestParam,db:Db){
        this.param = param;
        this.db = db;
    }

    validate():void{

    }

    execute():void{

    }

    DB(param:RequestParam):void{

    }
}