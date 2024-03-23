const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname : {
        type: String,
        require: true
    },
    middlename: {
        type: String
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
        ref:'products'
    },
    address:{
        type:addressSchema
    }
    
});

const userModel = mongoose.model("users",userSchema);
module.exports = userModel;



