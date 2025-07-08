
// user_Schema.js

const { default: mongoose } = require("mongoose");
const { Categiri_Schema } = require("./Categiri_Schema");

const user_Schema = mongoose.Schema({

    name : {
        type : String,
        required : [true, "Name is required"],
    }, 
    date : {
        type : Date,
        required : [true, "Date is required"]
    }, 
    expences : [Categiri_Schema],
})

const user = mongoose.model('user', user_Schema);

exports.user = user;


