const mongoose = require('mongoose');
const AuthSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    ResetToken:{
        type:String,
        default:"",
    },
});

module.exports = mongoose.model("User",AuthSchema);