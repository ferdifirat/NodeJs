const router = require('express').Router();
const User = require('../model/User');
const Post = require('../model/Post');
const verify = require('./verifyToken');

router.get('/', verify , async (req,res)=>{
    try{
        const posts = await Post.find();
         res.json(posts);
     }catch(err){
         res.json({message:err});
    }
    
 })

router.get('/:postId', async (req,res)=>{
   try{
       const posts = await Post.findById(req.params.postId);
        res.json(posts);
    }catch(err){
        res.json({message:err});
   }
   
})

router.post('/',async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:error})
    }

});

router.delete('/:postId', async (req,res)=>{
    try{
        const removedPost = await Post.deleteOne({_id :req.params.postId});
         res.json(removedPost);
     }catch(err){
         res.json({message:err});
    }
 });

 router.patch('/:postId', async (req,res)=>{
    try{
        const updatedPost = await Post.updateOne({_id :req.params.postId},
             {$set: {title: req.body.title}}
             );
         res.json(updatedPost);
     }catch(err){
         res.json({message:err});
    }
 });

module.exports = router;