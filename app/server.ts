import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from "path";
import * as bodyParser from 'body-parser';
import * as multer from 'multer';

dotenv.config({path:".env"});

// const Global.__base = process.cwd + '/';

const app = express();

const port = process.env.PORT||3000;
// app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

const user = require('./routes/api/user');

// app.get('/',(req,res)=>{
//     res.send("hihi");
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',user);

app.listen(port,()=>{
    console.log("Server is listening at port :"+port);
    console.log(process.env.MONGODB_URI);
    // console.log(process.cwd);
});