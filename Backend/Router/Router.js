const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user');
//const user = require('../models/user');
const product = require('../models/product')
router.get('/',(req,res)=>{
    User.find({},(err,allUsers)=>{
        if(err)
            res.json({message:'Error in fetching data'});
        else    
            res.json(allUsers);
    })
})
router.post('/register', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
        res.send(false)
       // return res.status(400).send('That user already exisits!');
    } 
    else {
    // Insert the new user if they do not exist yet
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    res.send(true);
}
});
router.post('/login',async (req,res)=>{
    let result = await User.findOne({email:req.body.email});
    if(!result){
         res.send('No user with this email')
    }
    else{
        DPass=result.password
        Upass=req.body.password
        const compare = await bcrypt.compare(Upass,DPass)
        if(compare){
            res.send(true)
        }
        else{
            res.send(false)
        }
    }

 
})

router.get('/products',(req,res)=>{
    product.find({},(err,allProducts)=>{
        if(err)
            res.json({message:'Error in fetching data'});
        else    
            res.json(allProducts);
    })
})
module.exports = router;