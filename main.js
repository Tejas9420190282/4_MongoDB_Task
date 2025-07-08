
const express = require('express');
const colors = require('colors');
const { connectDB } = require('./config/db');


const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));



const PORT = 7878;

const startServer = async () => {
    try {
        
        await connectDB();

        await app.listen(PORT, () => {

            console.log(`Server running on http://localhost:${PORT}`.bgGreen);
        });

    } catch (error) {
        
        console.log(`Error in start server : ${error.message}`.bgRed);
    }
}

startServer();




