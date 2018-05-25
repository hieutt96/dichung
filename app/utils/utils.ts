class Utils {
    public checkKeysNotExists(obj:object,keys:string[]){
        if(Array.isArray(keys)){
            for(let i =0 ;i < keys.length;i++){
                if(!(keys[i] in obj)){
                    return i;
                }
            }
        }else if (!(keys in obj)){
            return 0;
        }
        return -1;
    }

    public checkEmail(email:string){
        const reg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return reg.test(email);
    }

    public checkUsername(username:string){
        const reg = /\w{6,15}/;
        return reg.test(username);
    }

    public checkPhone(phone:string){
        const reg = /^\d{8,15}$/;
        return reg.test(phone);
    }

    public checkPassword(password:string){
        if(password.length>6){
            return true;
        }
        return false;
    }
}

module.exports = Utils;