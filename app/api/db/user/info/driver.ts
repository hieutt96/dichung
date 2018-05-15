import {IUserInfo} from './iuserinfo';
import {AUserInfo} from './userInfo';
import { UserAccount } from '../../../../models/userAccount';

export class Driver extends AUserInfo implements IUserInfo{
    constructor(user:UserAccount){
        super(user);
    }

    getInfo():void{

    }
}

