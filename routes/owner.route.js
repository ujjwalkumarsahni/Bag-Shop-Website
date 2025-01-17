const express = require('express');

const router = express.Router();

router.get('/admin', (req,res) =>{
    const success = req.flash("success");

    res.render('createproducts' , {success});
})

module.exports = router; 