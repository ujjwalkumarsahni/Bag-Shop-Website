const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model.js');


module.exports = async (req,res,next) =>{
    if(!req.cookies.token){
        req.flash("error", "You can login first");
        return res.redirect('/');
    }

    try{
        const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        const user = await userModel.findOne({email: decoded.email}).select('-password');

        req.user = user;
        next();
    }catch (err) {
        console.error("JWT Verification Error:", err.message);
        req.flash("error", "Invalid session, please log in again");
        res.redirect("/");
    }
}


