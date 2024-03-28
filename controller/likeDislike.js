const productModel = require("../model/product")
const likeDislike = async (req,res)=>{
    let updateProduct = {
        $push: {likes : req.body.userId},
        $pull: {dislikes : req.body.userId}
    }
    if(req.params.actions === 'dislikes'){
        updateProduct = {
            $push: {dislikes : req.body.userId},
            $pull: {likes : req.body.userId}
        }
    }
    try {
        
        await productModel.findByIdAndUpdate(req.body.productId,updateProduct)
        res.json({
            success:true,
            message: `Product get ${req.params.actions}`
        })
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = likeDislike