const mongoose = require('mongoose');
const addressSchema = require('./address');
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require: true,
        unique:true
    },
    role:{
        type:String,
        require:true
    },
    wishlist:{
        type: [mongoose.Schema.Types.ObjectId],
        default:[],
        ref:"products"
    },
    address:{
        type:addressSchema,
        
        require:true
    }
    
});

userSchema.pre("save", function() {
    const salt = bcrypt.genSaltSync(10);
    const hash= bcrypt.hashSync(this.password,salt);
    this.password = hash;
})

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;



