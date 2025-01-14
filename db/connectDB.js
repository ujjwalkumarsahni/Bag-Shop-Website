const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables for example .env file


const connectDB = mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
});

module.exports = connectDB;



