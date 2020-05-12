const mongoose=require('mongoose');
const schema=mongoose.Schema;

var usershema=new schema({
    name:String,
    username:String,
    email:String,
    password:String,
    isVerified:Boolean
});

module.exports=mongoose.model('users',usershema);