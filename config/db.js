
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        
        await mongoose.connect("mongodb://127.0.0.1:27017/task2");

        console.log(`Database connected successfully.....`.bgGreen);

    } catch (error) {
        
        console.log(`Error in database connection...`.bgRed);
    }
}

exports.connectDB = connectDB;
