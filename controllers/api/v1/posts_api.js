const Post = require("../../../models/post");
const User = require("../../../models/user");
const Comment = require("../../../models/comment");

module.exports.index = async function(req, res) {
    let posts = await Post.find({})
        .sort("-createdAt")
        .populate("user")
        .populate({
            // finding post and then populating user inside it
            path: "comment", //nesting populating of user and comment of that user
            populate: {
                path: "user",
            },
        });

    return res.json(200, {
        message: "List of posts",
        posts: posts,
    });
};

module.exports.destroy = async(req, res) => {
    try {
        let post = await Post.findById(req.params.id);

        if (post.user == req.user.id) {
            // if comment found

            post.remove();

            await Comment.deleteMany({ post: req.params.id });

            return res.json(200, {
                message: "Post and comments are deleted succesfully",
            });
        } else {
            return res.json(200, {
                message: "you can delete this comment",
            });
        }
    } catch (err) {
        console.log("**********", err);
        return res.json(500, {
            message: "Internal server error",
        });
    }
};