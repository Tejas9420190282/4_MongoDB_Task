
// Categiri_Schema.js 

const { default: mongoose } = require("mongoose");

const Categiri_Schema = new mongoose.Schema({

    categiri : {
        type : String,
        required : [true, "Categiri is required"],
    },
    amount : {
        type : Number,
        required : [true, "Amount is required"],
        min : [1, "Amount is must greatter than 1"]
    }
})

exports.Categiri_Schema = Categiri_Schema;

