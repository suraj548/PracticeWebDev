const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
User.pre('save',async function(next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashP = await bcrypt.hash(this.password,salt)
        this.password=hashP
        next()
    }catch(error){
        next(error)
    }
})
/*User.methods.isValidP = async function(password){
    const users = this
    const compare = await bcrypt.compare(password,users.password)
    return compare
}*/
var user = mongoose.model('User',User,'users')
module.exports = user