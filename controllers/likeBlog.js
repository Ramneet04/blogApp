const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.createLike = async (req,res) => {

    try {
        const {post , user} = req.body;
        const liking= new Like({
            post,user
        });
        //use await as it is a database interaction..
        const savedlike = await liking.save();

        //update the post that we have liked that post
        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {likes: savedlike._id}}, {new: true} )
        .populate("likes")
        .exec();
        res.status(200).json({
            success:true,
            post:updatedPost,
            message:"Like Succefully posted",
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Can't fullfil the Like update",
        })
    }
}

exports.removeLike = async (req,res) =>{
    try {
        const {post,like} = req.body;
        //find and delete the like from like collection...
        const deletedLike = await Like.findOneAndDelete({_id:like});
        const updatedpost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true});
        res.status(200).json({
            success:true,
            post:updatedpost,
            message:"Like Succefully removed",
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Can't fullfil the UnLike update",
        })
    }
}










exports.dummyroute = (req,res)=>{
    res.send("<h1>Dummy Route</h1>");
}