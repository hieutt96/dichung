import { Request,Response,NextFunction } from 'express';
const Utils = require('../utils/utils');
const UserAccountModel = require('../models/userAccount');
class UserController {

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
        }
        if(!(utils.checkUsername(req.body.username))){
            return res.status(400).json({
                errCode:-1,
                msg:"Username invalid"
            });
        }
        let info = {
            username:req.body.username,
            password:req.body.password,
        }
        console.log(info);
        UserAccountModel.findByUsername(info.username,(err:any,userAcconunt:any)=>{
            if(err) {
                console.log(err);
                return res.json({
                    errCode:-1,
                    msg:"Error",
                });
            }
            if(userAcconunt){
                if(userAcconunt.comparePassword(info.password)){
                    return res.json({success:"Success"});
                }else{
                    return res.status(400).json({
                        errCode:-1,
                        msg:"Password Mismatch"
                    });
                }
            }else{
                return res.json({
                    errCode:-1,
                    msg:"No find username match"
                })
            }
        });
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

        if(!(utils.checkPhone(req.body.phone))){
            return res.status(400).json({
                errCode:-1,
                msg:"Phone Invalid"
            })
        }

        if(!(utils.checkPassword(req.body.password))){
            return res.status(400).json({
                errCode:-1,
                msg:"Password qua ngan"
            });
        }

        if(!(utils.checkUsername(req.body.username))){
            return res.status(400).json({
                errCode:-1,
                msg:"Username Invaild"
            });
        }

        let info = {
            username :req.body.username,
            password : req.body.password,
            phone:req.body.phone,
            email:req.body.email,
            partner_id :(req.body.partner_id)?req.body.partner_id:null,
            role_id:1,
            token:(req.body.token)?req.body.token:null,
            disable_api_ids:(req.body.disable_api_ids)?req.body.disable_api_ids:null,
            last_login:null,
            created_at:null,
            updated_at:null
        }
        UserAccountModel.findByUsername(info.username,(err:any,userAcconunt:any)=>{
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
                UserAccountModel.save(info,(err:any,account:any)=>{
                    if(err) {
                        throw err;
                    }else{
                        res.json({success:"Success"});
                    }
                });
            }
        });
    }

    public logout(req:Request,res:Response){
        // req.session.destroy();
    //     req.clearCookie;
    //     return res.json({
    //         errCode:0,
    //         data:{}
    //     });
    }
}

module.exports = UserController;
