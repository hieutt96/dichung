import { AUserInfo } from "./UserInfo";
import { IUserInfo } from "./IUserInfo";
import { UserAccount } from "../../../../models/userAccount";

export class Operator extends AUserInfo implements IUserInfo{
    constructor(user:UserAccount){
        super(user);
    }

    getInfo():void{
        
    }
}