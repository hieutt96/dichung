import { AUserInfo } from "./userInfo";
import { IUserInfo } from "./iuserinfo";
import { UserAccount } from "../../../../models/userAccount";

export class Operator extends AUserInfo implements IUserInfo{
    constructor(user:UserAccount){
        super(user);
    }

    getInfo():void{
        
    }
}