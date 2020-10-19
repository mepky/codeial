const Post = require("../models/post"); // require post models
const Comment = require("../models/comment");

module.exports.create = async(req, res) => {
    try {
        await Post.create({
            // creating posts
            content: req.body.content,
            user: req.user._id,
        });
        req.flash("success", "Post created Successfuly");
        return res.redirect("back");
    } catch (err) {
        req.flash("error", err);
        return res.redirect("back");
    }
};

module.exports.destroy = async(req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id) {
            // if post found then watching if post is created by same user who is logged in
            post.remove(); // removing post

            await Comment.deleteMany({ post: req.params.id });
            req.flash("success", "Post and its comments deleted");
            return res.redirect("back");
        } else {
            return res.redirect("back");
        }
    } catch (err) {
        console.log(`error ${err}`);
    }
};