const mongoose = require('mongoose');   // require mongoose

const userSchema = new mongoose.Schema({    // create new Schema
    email:{
        type: String,
        unique: true,
        required: true
    },
    
    name:{
        type:String,
        required:true
    },
  
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);   //model name is User
module.exports = User;