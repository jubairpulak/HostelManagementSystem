"use strict"
const dot = require('dot-object');
const bcryptjs = require("bcryptjs")

const _ = require("lodash")
const catchAsync = require("../error/catchAsync");
const AppError = require("../error/appError");
// const {checkValidation} = require("../services/validationService")

const ValidityClass = require("../services/validationUsingClass");
const AuthService = require("../services/authService");
const UserModel = require("../users/userModel")
const GroupModel = require("../groups/groupModel")
const PostModel = require("../post/postModel")


exports.createPost = catchAsync(async (req, res, next)=>{
    const {groupId} = req.params
    console.log(req.body)
    const {post, title} = req.body
    const isTitleValid = new ValidityClass(req.body.title, "Title").IsEmpty().IsString().print()
    if(isTitleValid) return next(new AppError(isTitleValid, 400))
    
    
    const isPostValid = new ValidityClass(req.body.post, "Post").IsEmpty().IsString().print()
    if(isPostValid) return next(new AppError(isPostValid, 400))


    
    const IsPostCreated = await new AuthService(PostModel).createPost(groupId, req.user.userid, post, title)

    res.status(201).json({
        status : "success",
        data : {
            IsPostCreated
        }
    })
    
    
})

exports.getPost = catchAsync(async(req, res, next)=>{
    const {groupId} = req.params

    const GetPost = await new AuthService(PostModel).getPost(groupId, req.user.userid)

    res.status(201).json({
        status : "success",
        data : {
            GetPost
        }
    })
    
})