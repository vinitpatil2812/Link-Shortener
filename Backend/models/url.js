const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true,
    },

    reDirect : {
        type : String
    },

    clicks : {
        type : Number
    }
});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;