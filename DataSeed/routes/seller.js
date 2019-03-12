
var express = require('express');
var router = express.Router();
var data =require('../models/data');

router.get('/',function(req,res){
  res.render('seller/index.ejs');
});

router.get('/sell',function(req,res){
  res.render('seller/sellform.ejs');
});

router.post('/sell',function(req,res){
  
  console.log(req.body.title);
  console.log(req.body.category);
  console.log(req.body.description);
  console.log(req.body.price);
  console.log(req.body.rows_);
    
  var Data=new data(
  {
  user:req.user._id,
	title:req.body.title,
	category:req.body.category,
	description:req.body.description,
	tags:req.body.tags,
	price:req.body.price,
	rows_:req.body.rows_
  });
  
  
  data.create(Data,function(err,data){
    if(err) console.log(err);
    

    });

    res.redirect('/');
    


});
router.get('/mydata',function(req,res){
  data.find({user:req.user},function(err,data){
    if(err)console.log(err);
         if(data==null){
       req.flash('error','No Data found in this category.');
    res.redirect('/');
      }
      res.render('general/show.ejs',{data:data});
  
  
    });  
  
});
module.exports = router;
