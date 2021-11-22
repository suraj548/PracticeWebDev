const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')
router.post('/register', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(400).send('That user already exisits!');
    } 
    else {
    // Insert the new user if they do not exist yet
    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();
    res.send(user);
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
            res.send('Welcome')
        }
        else{
            res.send('Wrong Password')
        }
    }


})

module.exports = router;