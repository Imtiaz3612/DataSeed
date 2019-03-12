var express=require('express');
var router=express.Router();

var data=require('../models/data');
router.get('/',function(req,res){
        res.render('general/category.ejs');
        
});
router.get('/:category',function(req,res){
   data.find({category:req.params.category},function(err,data){
       if(err)console.log(err);
       if(data==null||data.length==0){
        req.flash('error','No Data found in this category.');
        return res.redirect('/');
      }
      res.render('general/show.ejs',{data:data});
       });     
});

module.exports=router;
