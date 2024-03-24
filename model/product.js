const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    title: {
        type:String,
        require:true
    },
    description: {
        type: String,
        require: true
    },
    price:{
        type:Number,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        default:10
    },
    category:{
        type:String,
        require:true
    },
    likes:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref:"users"
    },
    dislikes:{
        type:[mongoose.Schema.Types.ObjectId],
        default:[],
        ref:"users"
    }
    
})

const productModel = mongoose.model("product",productSchema);
module.exports = productModel