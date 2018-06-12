const config = require('../../config/database/mysql/config');
const caminte = require('caminte'),
Schema = caminte.Schema,
schema = new Schema(config.driver,config);
let User = schema.define('user_account',{
    id:{type:schema.Number},
    partner_id:{type:schema.Number,"null":true},
    role_id:{type:schema.Number, default:1},
    username:{type:schema.String, "null":false, unique:true},
    password:{type:schema.Text, "null":false},
    phone:{type:schema.String, "null":true},
    email:{type:schema.String,"null":false},
    token:{type:schema.String,"null":true},
    disable_api_ids:{type:schema.String, "null":true},
    last_login:{type:schema.String,"null":true},
    created_at:{type:schema.Date,"null":true},
    updated_at:{type:schema.Date,"null":true},
},{
    primaryKeys:['id']
});

module.exports = User;
    
