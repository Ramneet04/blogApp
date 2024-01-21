const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async (req,res,next)=>{
    try {
        const {post,user,body}= req.body;
        const comment = new Comment({
            post,user,body
        });
        console.log("one");
        const savedcomment=await comment.save();
        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: savedcomment._id}}, {new: true} )
        .populate("comments")
        .exec();
        console.log("two");
        res.status(200).json({
            success:true,
            post:updatedPost,
            message:"Comment Succefully posted",
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Can't fullfil the comment update",
        })
    }
}