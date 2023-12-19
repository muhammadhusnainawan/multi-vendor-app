const express = require("express")
const path = require("path");
const User = require("../models/userModel")
const {uploads} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

router.post("/create-user", uploads.single("file"), async(req,res,next)=>{
    const {name,email,password} = req.body
    const userEmail = await User.findOne({email})
    if (userEmail) {
        return next(new ErrorHandler("user already exists", 400))
    }
    const filename = req.file.filename
    const fileUrl = path.join(filename)
    const user = {
        name:name,
        email: email,
        password: password,
        avatar: fileUrl
    }
    console.log(user)
})

module.exports = router;