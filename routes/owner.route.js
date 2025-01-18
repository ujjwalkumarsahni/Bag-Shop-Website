const express = require('express');
const ownarModel = require('../models/owner.model')
const router = express.Router();
if(process.env.NODE_ENV === "development"){
    router.post('/create', async (req,res) =>{
        let owners = await ownarModel.find();
        if(owners.length>0) return res.status(503).send("you don't have permission to create a new owner")
        
        let {fullname,email,password} = req.body;
        let createdOwner = await ownarModel.create({
            fullname,
            email,
            password,
        }) 
        res.status(201).send(createdOwner);
    })
}



router.get('/admin', (req,res) =>{
    const success = req.flash("success");

    res.render('createproducts' , {success});
})

module.exports = router; 