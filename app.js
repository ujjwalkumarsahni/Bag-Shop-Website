const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const expressSession = require('express-session');


// Load environment variables from .env file
require('dotenv').config(); 

// Import the database
const connectDB = require('./db/connectDB.js'); 
connectDB();

// Import your models
const user = require('./models/user.model.js');
const owner = require('./models/owner.model.js');   
const Product = require('./models/product.model.js');

const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/user.route.js');
const ownersRouter = require('./routes/owner.route.js');
const productsRouter = require('./routes/product.route.js');

// Create an Express app
const app = express()


app.use(express.json());
app.use(cookieParser())

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Import routes
app.use('/', indexRouter)
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