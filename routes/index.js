const express = require('express');
const  isLoggedIn  = require('../middlewares/isLoggedIn');
const router = express.Router();

const productModel = require('../models/product.model.js');

router.get('/', (req,res) =>{
    const error = req.flash("error");
    res.render("index", {error});
})

router.get('/shop',isLoggedIn, async (req,res) =>{
    const products = await productModel.find();

    res.render("shop" ,{products});
})

router.get('/logout',isLoggedIn, async (req,res) =>{
    const products = await productModel.find();
    res.render("shop", { products });
})

module.exports = router; 