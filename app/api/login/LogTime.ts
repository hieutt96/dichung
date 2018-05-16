import { ANotify } from "../base/ANotify";
import { UserAccount } from "../../models/userAccount";
import { RequestParam } from "./requestParam";

class LogTime extends ANotify{

    user:UserAccount;
    requestParam:RequestParam;

    constructor(user:UserAccount,requestParam:RequestParam){
        super();
        this.user = user;
        this.requestParam = requestParam;
    }

    update():void{

    }
}