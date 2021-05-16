const mongoose = require("mongoose");


const user = new mongoose.Schema({
    itemID : {type: Number,required: true},
    firstName: {type : String,required: true},
    lastName:  {type : String,required: true},
    email:  {type : String,required: true},
    tel:  {type : String,required: true},
    password:  {type : String,required: true},
},{collection:'users'});

let userModel = mongoose.model('user', user);

module.exports = userModel;