const express = require('express');

const Product = require("../models/users.model")

const router=express.Router();

const upload = require("../middlewares/uploads")


router.post('/',upload.single("productImages"), async(req,res)=>{

try{

    const product = await Product.create({
        name:req.body.name,
        price:req.body.price,
        image_urls:req.file.path,
    })
    return res.status(201).json({product});

}


catch(e){
    return res.status(500).json({message:e.message,status:"Failed"})
}



});
  

module.exports=router;