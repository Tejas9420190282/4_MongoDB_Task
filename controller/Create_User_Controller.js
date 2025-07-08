
// Create_User_Controller.js

const { user : userSchema } = require("../models/user_Schema");

const Create_User_Controller = async (req, res) => {
    try {

        const {name, date, expences} = req.body;

        console.log(req.body);

        if (!name || !date || !Array.isArray(expences)) {
            
            console.log(`All the inputs are Mandatory....`.bgRed);
            
            return res.status(404).json({
                success : false,
                message : "All the inputs are Mandatory....",
            })
        }

        const user = new userSchema({
            name, date, expences
        });

        await user.save();

        console.log(`User data Inserted successfully......`.bgYellow);
        
        res.status(200).json({
            success : true,
            message : "User date Inserted successfully.....",
            user : user
        })
        
    } catch (error) {
        
        console.error(`Error in Create_User_Controller : ${error.message}`.bgRed);
        
        res.status(500).json({
            success : false,
            message : `Error in Create_User_Controller : ${error.message}`
        })
    }
} 

exports.Create_User_Controller = Create_User_Controller;