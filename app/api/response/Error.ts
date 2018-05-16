import { IResponse } from "./IResponse";
import { IJson } from "../json/ijson";

export class Error implements IResponse,IJson{
    CODE_ERROR:String = 'error';
    CODE_SUCCESS:String = 'success';
    message:String;

    constructor(message:String){
        this.message = message;
    }

    getCode():void{

    }

    toJson():void{
        
    }
}