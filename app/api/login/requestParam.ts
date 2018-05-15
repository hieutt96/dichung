export class RequestParam{
    private username:String;
    private password:String;
    private ip:String;
    private deviceid:String;

    constructor(username:String,password:String,ip:String,deviceip:String){
        this.username = username;
        this.password = password;
        this.ip = ip;
        this.deviceid = deviceip;
    }

    setUsername(username:String):void{
        this.username= username;
    }

    getUsername():String{
        return this.username;
    }

    setPassword(password:String):void{
        this.password = password;
    }

    getPassword():String{
        return this.password;
    }

    setIp(ip:String):void{
        this.ip = ip;
    }

    getIp():String{
        return this.ip;
    }

    setDeviceIp(deviceip:String):void{
        this.deviceid = deviceip;
    }

    getDeviceIp():String{
        return this.deviceid;
    }
}