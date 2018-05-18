import * as express from 'express';
import { UserController } from '../../controllers/user/UserController';

const router = express.Router();

const usercontroller = new UserController();

router.get('/login',(req:express.Request,res:express.Response)=>{
    res.render('login');
});

router.post('/login',  (req:express.Request,res:express.Response)=> {
    console.log(req.body);
} );

module.exports = router;