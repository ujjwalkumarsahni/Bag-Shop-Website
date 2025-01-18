const express = require('express');
const  isLoggedIn  = require('../middlewares/isLoggedIn');
const router = express.Router();

const productModel = require('../models/product.model.js');
const userModel = require('../models/user.model.js');

router.get('/', (req,res) =>{
    const error = req.flash("error");
    res.render("index", { error, loggedin: false });
})
router.get('/account', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)
            .populate("cart") 
            .lean(); 

        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/");
        }

        res.render("account", { user });
    } catch (err) {
        console.error("Error loading profile:", err.message);
        req.flash("error", "Something went wrong");
        res.redirect("/");
    } 
});

router.get('/shop', isLoggedIn, async (req, res) => {
    const products = await productModel.find();
    const success = req.flash('success'); 
    res.render("shop", { products, success }); 
});


router.get('/cart', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email}).populate("cart");
    res.render("cart", {user, loggedin: true }); 
});

router.post('/cart/delete/:id', isLoggedIn, async (req, res) => {
    try {
        const userId = req.user._id;
        const itemId = req.params.id;
        await userModel.updateOne(
            { _id: userId },
            { $pull: { cart: itemId } }
        );

        res.redirect('/cart');
    } catch (error) {
        console.error("Error deleting item from cart: ", error);
        res.status(500).send("Internal Server Error");
    }
});



router.get('/addtocard/:productId',isLoggedIn, async (req,res) =>{
    const user = await userModel.findOne({email: req.user.email});

    user.cart.push(req.params.productId);
    await user.save();
    req.flash("success","Added to cart");
    res.redirect('/shop');
})

router.get('/logout',isLoggedIn, async (req,res) =>{
    const products = await productModel.find();
    res.render("shop", { products });
})

module.exports = router; 