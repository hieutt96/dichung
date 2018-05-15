import {RequestParam} from "./requestParam";
import { UserAccount } from "../../models/userAccount";
import { isNull } from "util";
export class Db{
    private token:String;
    private param:RequestParam;
    private user:UserAccount;

    constructor(token:String,param:RequestParam,user:UserAccount){
        this.token = token;
        this.param = param;
        this.user = user;
    }

    validate():void{

    }

    getUser():void{

    }

    getUserInfo():any{

    }

    removeUserInfoCache():void{

    }

    generateToken():void{

    }

    saveTokenKeyToDb():void{

    }

    saveUserInfoToCache():void{

    }
}