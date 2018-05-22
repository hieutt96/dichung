import { Request,Response,NextFunction } from 'express';
import { User_Account } from '../models/user_account';
const Utils = require('../utils/utils');
class UserController {

    // constructor(){

    // }

    public  getLogIn(req:Request , res:Response, next :NextFunction){
        res.render("user/login");
    }

    public postLogin(req:Request , res:Response){
        let keys = ['username','password'];
        let utils = new Utils();
        let exists = utils.checkKeysNotExists(req.body,keys);
        if(exists !== -1){
            return res.status(400).json({
                errCode:-1,
                msg:'Missing argument ' + keys[exists]
            });
        }else{
            let username = req.body.username;
            let password = req.body.password;
        }

    }

    public getSignUp(req:Request, res:Response){
        res.render('user/signup');
    }

    public postSignUp(req:Request,res:Response){
        let keys = ['username','password','email','phone'];
        let utils = new Utils();
        let exists = utils.checkKeysNotExists(req.body,keys);
        if(exists !== -1){
            return res.status(400).json({
                errCode: -1,
                msg:'Missing argument ' + keys[exists]
            });
        }

        if(!(utils.checkEmail(req.body.email))){
            return res.status(400).json({
                errCode:-1,
                msg:'Invalid email format'
            })
        }

        let info = {
            username :req.body.username,
            password : req.body.password,
            phone:req.body.phone,
            email:req.body.email
        }
        User_Account.findByUsername(info.username,(err:any,userAcconunt:any)=>{
            if(err) {
                console.log(err);
                return res.status(500).json({
                    errCode:500,
                    msg:'Internal error'
                });
            }
            if(userAcconunt){
                return res.status(400).json({
                    errCode:-2,
                    msg:'Username already exists'
                });
            }else{
                // console.log(2);
                let userAcconunt = new User_Account(info);
                console.log(userAcconunt);
                userAcconunt.save((err:any)=>{
                    if(err) {
                        console.log(err);
                    }else{
                        res.json({success:"Success"});
                    }
                });
            }
        });

    }

}

module.exports = UserController;