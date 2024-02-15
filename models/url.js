const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortID : {
        type : string,
        required : true,
    },

    reDirect : {
        type : string
    },

    clicks : {
        type : Number
    }
});

const URL = mongoose.model('url', urlSchema);

model.exports = URL;