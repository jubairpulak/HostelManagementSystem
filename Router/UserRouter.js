const express = require("express");
// const {celebrate, Joi,  Segments} = require("celebrate")
const router = express.Router();
const AppError = require("../error/appError");
const { createSlug } = require("../Controller/SlugController");


// router.route("/create",).post( celebrate({
//     [Segments.BODY] : Joi.object().keys({
//         Brand : Joi.string().required(),
//         productName : Joi.string().required()
//     }),
//     [Segments.QUERY]: {
//         token : Joi.string().token().required()
//     }
//   }), createSlug)

// router.route("/create").post(createSlug);
module.exports = router;
