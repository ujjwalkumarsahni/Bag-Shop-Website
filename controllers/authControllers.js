const bcrypt = require('bcrypt');
const userModel = require('../models/user.model.js');
const { generateToken } = require('../utils/generateToken.js');

module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        const user = await userModel.findOne({email: email});
        if(user) return res.status(401).send("you already have an account, please login");

        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).send(err.message);

            else {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if (err) return res.status(500).send(err.message);
                    else {
                        let user = await userModel.create({
                            fullname,
                            email,
                            password: hash
                        })

                        const token = generateToken(user);
                        res.cookie("token", token);
                        res.redirect('/shop');
                    }
                })
            }
        })

    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports.loginUser = async (req,res) =>{
    const {email,password} = req.body;
    
    const user = await userModel.findOne({email: email});

    if(!user) return res.status(401).send("Email and password is inconnect");

    bcrypt.compare(password,user.password, async (err, result) =>{
        if(result){
            const token = generateToken(user);
            res.cookie("token",token);
            res.redirect('/shop');
        }
        else{
            return res.status(500).send("Email and password is incorrect");
        }
    })
}


module.exports.logout = (req,res) =>{
    res.cookie("token","");
    res.redirect('/');
}