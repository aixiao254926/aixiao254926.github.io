const express = require('express');
const router = express.Router();
// 子路由
router.get('/',(req,res)=>{
    res.send('商品列表')
})
router.get('/:id',(req,res)=>{
    res.send('商品详情'+req.params.id);
})
router.get('/:id/comment',(req,res)=>{
    res.send('商品'+req.params.id+'的评论')
})
router.post('/',(req,res)=>{
    res.send('商品添加')
})
module.exports = router;