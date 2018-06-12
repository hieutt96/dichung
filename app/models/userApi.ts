
// const schema = require('./../config/database/mysql/config');

// export class UserApi{

//     static define(){
//         let userApi = schema.define('user_api',{
//             id:{type:schema.Number},
//             category_id:{type:schema.Number},
//             code:{type:schema.Number},
//             name:{type:schema.Text},
//             link:{type:schema.Text},
//             description:{type:schema.Text}
//         })
//     }

//     id:number;
//     category_id:number;
//     code:string;
//     name:string;
//     link:string;
//     description:string;

//     constructor(props:any){
//         this.id = props.id;
//         this.category_id = props.category_id;
//         this.code = props.code;
//         this.name = props.name;
//         this.link = props.link;
//         this.description = props.description;
//     }

//     getId():number{
//         return this.id;
//     }
    
//     getCategoryId():number{
//         return this.category_id;
//     }

//     getName():string{
//         return this.name;
//     }
// }
