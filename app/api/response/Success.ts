import { IResponse } from "./IResponse";
import { IJson } from "../json/ijson";

export class Success implements IResponse,IJson{
    CODE_SUCCESS:String = 'success';
    CODE_ERROR:String = 'error';
    data:Array<String>;

    constructor(data: Array<String>){
        this.data = data;
    }

    getCode():void{

    }

    toJson():void{
        
    }
}