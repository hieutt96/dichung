export class LogInUtils {
    static checkKeysNotExists = (obj:object,keys:string[])=>{
        if(Array.isArray(keys)){
            for(let i = 0; i < keys.length; i++){
                let temp = keys[i];
                if(!(temp in obj)){
                    return i;
                }
            }
        }else if(!(keys in obj)){
            return 0;
        }
        return -1;
    }
}