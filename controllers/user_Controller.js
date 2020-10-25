const User = require('../models/user')
// rendering sign up page
module.exports.SignUp= (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('profile');
    }

    return res.render('sign_up',{
        title:'SignUp'
    })
}

// rendering sign in page
module.exports.signIn = (req,res)=>{
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('sign_in',{
        title:'Sign In'
    });
}

// render profile page
module.exports.profile = (req,res)=>{
    User.findById(req.params.id,(err,user)=>{
        return res.render('user_profile',{
            title: 'profile page',
            profile_user: user
            
        })
    })
    
}  

module.exports.update = (req,res)=>{
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id,req.body,(err,user)=>{
            return res.redirect('back');
        })
    }
    else{
        return res.status('401').send('unauthorised');
    }
}

// creating user is sign up

module.exports.create = (req,res)=>{
    // check password or cnfrm password are same or not
    if(req.body.password != req.body.confirm_password){
       return res.redirect('back')

    }
    User.findOne({email:req.body.email},(err,user)=>{                     // finding user by email
        if(err){
           console.log(`error in finding user ${err}`); return;}
        if(!user){
            User.create(req.body,(err,user)=>{                          // if user not found then we create the user
                if(err){console.log(`error in creating user ${err}`); return;}
                
                return res.redirect('sign-in');              

            })
                
            }
            else{
                console.log(`user already exists`);
              return res.redirect('back');
            }
        });
    };

module.exports.createSession = (req,res)=>{   
    req.flash('success','Login Succesfully!')             // signing in the user
   return res.redirect('/');
}

module.exports.destroySession = (req,res)=>{            // logging out the session
    req.logout();
    req.flash('success','You have been Logout Succesfully!')  

    return res.redirect('/')
}
