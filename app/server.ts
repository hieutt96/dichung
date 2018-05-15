import * as express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({path:".env"});

// const Global.__base = process.cwd + '/';

const app = express();

const port = process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("hihi");
});

app.listen(port,()=>{
    console.log("Server is listening at port :"+port);
    console.log(process.env.MONGODB_URI);
    // console.log(process.cwd);
});