const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// Load environment variables from .env file
require('dotenv').config(); 

// Import the database
const db = require('./db/connectDB.js'); 

// Import your models
const user = require('./models/user.model.js');
const owner = require('./models/owner.model.js');   
const Product = require('./models/product.model.js');

const usersRouter = require('./routes/user.route.js');
const ownersRouter = require('./routes/owner.route.js');
const productsRouter = require('./routes/product.route.js');

// Create an Express app
const app = express()


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Import routes
app.use('/users', usersRouter);
app.use('/owners', ownersRouter);
app.use('/products', productsRouter);


const port = process.env.PORT || 5000; 
app.listen(port, (err) => {
    if (err) {
        console.error(`Error starting the server: ${err.message}`);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});