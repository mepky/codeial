const Post = require('../models/post')           // rquire post model
const User = require('../models/user')

module.exports.home=async (req,res)=>{
    try{let post= await Post.find({}).sort("-createdAt").populate('user').populate({              // finding post and then populating user inside it
        path:'comment',                      //nesting populating of user and comment of that user
        populate:{
            path:'user'
        }
    })
    
  let user = await  User.find({})  ;

  return res.render('home',{
    title:'posts',
    post: post,
    all_user: user
});}
catch(err){
    console.log(`Error ${err}`);
}
   
    

}