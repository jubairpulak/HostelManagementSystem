const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema

const UserSchema =  new mongoose.Schema({

        first_Name :{
            type : String,
            required : true,
            trim : true
        },
        last_Name :{
            type : String,
            required : true,
            trim : true
        },
       
        password : {
            type : String,
            required : true,
            min: 6,
            select : false,
           
        },
        contract_Info : {
            email : {
                type : String,
                required : true,
                unique : true,
               
                
            },
            phone_Number :{
                type : String,
                required : true,
                min : 11,
                unique : true,
            }
        },
        role :{
            type : String,
            default : "user",
            enum : ["admin", "user", "sub-admin"],
        },
       
        parents_Info:{

            father_Name : {
                type : String,
                required : true,
               
            },
            

            mother_Name :{
                type : String,
                required : true,
                
            }

        },
        request:{
            type : String,
            default : "pending",
            enum : ["active", "pending", "block"]
        },
        active : {
            type : String,
            default : "true",
            enum : ["true", "false"]
        },
        groupinfo:{
            type : ObjectId,
            ref : "GroupData"
        },
        postInfo:{
            type : ObjectId,
            ref : "PostSchema"
        },
        commentInfo:{
            type : ObjectId,
            ref : "commentSchema"
        },
        address :{
            type : String,
            required : true,
        }
    }, {timestamps : true})

    
    
    UserSchema.index({email : 1, password : 1})
    
    
    

module.exports = mongoose.model("UserSchema", UserSchema)