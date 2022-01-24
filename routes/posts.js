const router = require('express').Router();
const User = require('../model/User');
const Post = require('../model/Post');
const verify = require('./verifyToken');

router.get('/', verify , (req,res)=>{
    // res.json({
    //     posts:{
    //         title: 'my first post',
    //         description: 'random data you shouldnt access'
    //     }
    // })
    res.send(req.user);
})

// router.post('/', (req,res)=>{
// });

module.exports = router;