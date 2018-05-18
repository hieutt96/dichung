import { LogInUtils } from "../../utils/LogInUtils";
import * as express from "express";

export class UserController{

    postLogIn(req:express.Request,res:express.Response){
        let keys = ['username','password'];
        console.log(req.body);

        // let checkExists = LogInUtils.checkKeysNotExists(req.body,keys);
        // if(checkExists !== -1){
        //     return res.status(400).json({
        //         errCode : -1,
        //         msg :'Missing' + keys[checkExists]
        //     });
        // }
        // let username = req.body.username;
        // let password = req.body.password;

    }
}
