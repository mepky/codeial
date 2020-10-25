const mongoose = require('mongoose');
const Post = require('./post');

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required:true,

    },

    user:{
        type: mongoose.Schema.Types.ObjectId,         // type of user document
        ref:'User'                                    // refernce to User model
    },

    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'                                     // refer to post schema
    }
},{
    timestamps:true,
}
)
const Comment = mongoose.model('Comment',commentSchema);
 module.exports= Comment;

