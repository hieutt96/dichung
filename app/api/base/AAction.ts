import {ANotify} from "./ANotify";

export abstract class AAction{

    notifys = new Array();
    
    responseError(message:any){
        throw JSON.stringify({code:'error',message:message});
    }

    responseSucess(data:any){
        throw JSON.stringify({code:'success',data:data});
    }

    attach(notify:ANotify){
        this.notifys.push(notify);
    }

    notify():void{
        for(var i=0; i<this.notifys.length; i++){
            this.notifys[i].update();
        }
    }

    abstract execute():void;
}