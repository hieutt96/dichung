import {IUserInfo} from './IUserInfo';
import {AUserInfo} from './UserInfo';
import { UserAccount } from '../../../../models/UserAccount';

export class Driver extends AUserInfo implements IUserInfo{
    constructor(user:UserAccount){
        super(user);
    }

    getInfo():void{

    }
}

