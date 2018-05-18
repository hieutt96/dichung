"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    postLogIn(req, res) {
        let keys = ['username', 'password'];
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
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map