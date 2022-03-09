const express = require('express');
const router = express.Router();
const User = require('../models/user');
//const user = require('../models/user');
const product = require('../models/product');
const message = require('../models/msg')
const passport = require('passport');
const jwt = require('jsonwebtoken')
var verifyToken=require('../auth/token');
const { prod } = require('mathjs');
const user = require('../models/user');
//const user = require('../models/user');
router.get('/users',(req,res)=>{
    User.find({},(err,allUsers)=>{
        if(err)
            res.json({message:'Error in fetching data'});
        else    
            res.json(allUsers);
    })
})

/*
Code Not Working
router.get('/users/:email',(req,res)=>{
    var uemail = req.params.email
   result= User.findOne({email:uemail})
   console.log(result)
   if(result)
    res.send(result)
    else
        res.send(false)
})*/



router.post('/products', async (req, res) => {
    let prod = await product.findOne({ id: req.body.id });
            
        if (prod) {
            res.send(false)
          }  // return res.status(400).send('That user already exisits!'); 
      
        else {
                prod = new product({
                id: req.body.id,
                name: req.body.name,
                price: req.body.price
            });
            await prod.save();
            res.send(true);
    }
    console.log(prod)
 });

 router.get('/message',(req,res)=>{
    message.find({},(err,allUsers)=>{
        if(err)
            res.json({message:'Error in fetching data'});
        else    
            res.json(allUsers);
    })
})

 router.post('/message',verifyToken,async (req, res) => {
    let info = await message.findOne({ id: req.body.id });
            
        if (info) {
            res.send(false)
          }  // return res.status(400).send('That user already exisits!'); 
        
          else {
            prod = new message({
            id: req.body.id,
            name: req.body.name,
            desc: req.body.desc
        });
        await prod.save();
        res.send(true);
}
 });

router.post('/register',   
        /*passport.authenticate('register',{session:false}),*/
        async(req,res)=>{
          
            let shop_no = await user.findOne({shopno:req.body.shopno})
            if(shop_no)
                res.send("This shop is registered");
            else{

                new_shop = new user({
                    Fname:req.body.Fname,
                    Lname:req.body.Lname,
                    Shopno:req.body.Shopno,
                    email:req.body.email,
                    password:req.body.password
                })
                await new_shop.save();
                res.send(true)
            }

    }
)

router.post('/login',
            async (req,res,next)=>{
                passport.authenticate(
                    'login',
                    async(err,user)=>{
                        try{
                            if(err||!user){
                               // const error = new Error('An error occured')
                                //return next(Error)
                                return res.send(false)
                            }
                            req.login(
                                user,
                                {session:false},
                                async(error)=>{
                                    if(error) return next(error);
                                    const body={_id:user._id}
                                    const token = jwt.sign({user:body},'TOP_SECRET',{
                                        expiresIn:86400
                                    })

                                    return res.json({token})
                                } 
                            );
                        }catch(error){
                            return next(error)
                        }
                    }
                )(req,res,next);
            })

router.get('/products',(req,res)=>{
    product.find({},(err,allProducts)=>{
        if(err)
            res.json({message:'Error in fetching data'});
        else    
            res.json(allProducts);
    })
})
/*
Not Working Code
router.put('/products/:id',(req,res)=>{
    var uid=req.params.id
    var uprice=req.body.price
    product.findOneAndUpdate({id:uid},{price:uprice},(err,uproduct)=>{
        if(err)
            res.send({message:"Error"})
        else
            if(uproduct)
                res.send({message:"Data Updated"})
            else
                res.send({message:"Data Not found"})
    })
})*/
/*Not Working Code
router.delete('/products/delete/:id',(req,res)=>{
    var uid=req.params.id
    //var uprice=req.body.price
    product.findOneAndDelete({id:uid},(err)=>{
        if(err)
            res.send({message:"Error"})
        else
            res.send({message:"Data Deleted"})
    })
})*/

router.get('/profile',verifyToken,function(req,res,next){
    User.findById(req.userId,{password:0},function(err,u){
        if(err)
            return res.send(false)
        res.send(u)
      // console.log(u)
    })
})




module.exports = router;