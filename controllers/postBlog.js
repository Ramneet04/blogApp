const Post= require("../models/postModel");

exports.createPost = async (req,res) =>{
    try {
        const {title, body, author} = req.body;
        const post= new Post({
            title,body,author
        })
        const savepost= await post.save();
        res.status(200).json({
            success:true,
            post:savepost,
            message:"Comment Succefully posted",
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message: "Can't fullfil the Post creation",
        })
    }
}

exports.getAllposts = async (req,res) =>{
    try {
        const posts=await Post.find().populate("likes").populate("comments");
        res.status(200).json({
            success: true,
            posts,
            message:"All posts fetched"
        })   
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Can't fullfil the Post fetch",
        })
    }
}