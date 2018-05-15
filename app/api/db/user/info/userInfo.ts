import {UserAccount} from "../../../../models/userAccount"

export class AUserInfo{
    private user:UserAccount;
    
    constructor(user:UserAccount){
        this.user = user;
    }
}