const express = require('express')

const router = express.Router()
const {validationAndSignUp, validationAndLogin, getMyProfile, userrole, getallUsers, updateUserName, updateParentsInfo, updateContractInfo, updatePassword, updateActive, updateUserRequest, logoutUser} = require("./userController")

const {createGroup, getGroupsInfo} = require("../groups/groupController")

//from post
const {createPost, getPost} = require("../post/postController")
const {userauthorization} = require("../middleware/userMiddleware")

router.route("/signup").post(validationAndSignUp)
router.route("/login").post(validationAndLogin)
router.route("/get-me").get(userauthorization, getMyProfile)
router.route("/get-all").get(userauthorization, userrole("admin"), getallUsers )
router.route("/update-name").patch(userauthorization,  updateUserName)
router.route("/update-parents-info").patch(userauthorization,  updateParentsInfo)
router.route("/update-contract-list").patch(userauthorization,  updateContractInfo)
router.route("/update-password").patch(userauthorization,  updatePassword)
router.route("/deactive-me").patch(userauthorization, updateActive)
router.route("/update-request").patch(userauthorization, userrole("admin"), updateUserRequest)
router.route("/logout").post(userauthorization, logoutUser)

//group router
router.route("/create-group").post(userauthorization, userrole("admin"),createGroup)
router.route("/get-groups").get(userauthorization, userrole("admin"),getGroupsInfo)

//post related
router.route('/:groupId/create-post').post(userauthorization, createPost)
router.route('/:groupId/get-post').get(userauthorization, getPost)

module.exports =router