const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const dbgr = require('debug')('development:mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        dbgr('Connected to MongoDB');
    } catch (error) {
        dbgr('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
