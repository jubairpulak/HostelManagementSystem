const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const commentSchema = new mongoose.Schema({
    
    comment:{
        type : String,
        min : 1,
    },
    postFrom:{
        type : ObjectId, ref :"PostSchema"
    },
    userFrom:{
        type : ObjectId, ref : "UserSchema"
    }
},{timestamps: true})

module.exports = ("commentSchema", commentSchema)