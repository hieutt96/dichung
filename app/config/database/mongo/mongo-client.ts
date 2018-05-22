import * as mongodb from 'mongodb';

const MONGODB_URI = 'mongodb://localhost:27017/dichung';

mongodb.connect(MONGODB_URI, function(err){
    if(err) throw err;
    console.log("Da ket noi toi mongodb");
});

module.exports = mongodb;