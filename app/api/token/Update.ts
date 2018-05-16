import { AAction } from "../base/AAction";
import { UserAccount } from "../../models/userAccount";

export class Update extends AAction{

    token:String;
    user:UserAccount;

    constructor(token:String,user:UserAccount){
        super();
        this.token = token;
        this.user = user;
    }

    validate():void{
        console.log('');
    }

    db(token:String):void{

    }

    execute():void{
        console.log('');
    }
}