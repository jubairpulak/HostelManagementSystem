const mongoose = require("mongoose")

const {ObjectId} = mongoose.Schema

const postSchema = new mongoose.Schema({
    title:{
        type : String,
        max : 90,
        min : 3
    },
    post:{
        type : String,
        max : 500,
        min : 1,
    },
    userRole:{
        type : String,
        default : "user",
        enum : ["admin", "user"]
    },
    postBy:{type : ObjectId, ref:"UserSchema"},
    groupInfo:{type : ObjectId, ref : "GroupData"},
    commentInfo:[{type : ObjectId, ref : "commentScehma"}],

},{timestamps : true})

module.exports = mongoose.model("PostSchema", postSchema)