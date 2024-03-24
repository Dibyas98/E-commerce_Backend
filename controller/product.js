const productModel = require("../model/product");

/*================NEW PRODUCT CREATE=============*/
const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = new productModel({
      ...req.body,
    });
    await newProduct.save();
    res.json({
      success: true,
      message: "Product create Successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};



/*==================SEARCH PRODUCT ==============*/

const productList = async (req, res) => {
  try {
    const list = await productModel.find({
      $or: [
        { title: { $regex: req.query.search, $options: "i" } },
        { category: { $regex: req.query.search, $options: "i" } },
      ],
    });

    res.json({
      success: true,
      message: "Product list",
      result: list,
    });
  } catch (error) {
    console.log(error);
  }
};


/*=============SEARCH PRODUCT BY ID =============*/

const searchProductId = async (req,res) =>{
    try {
        const product = await productModel.findById(req.params.id);
        res.json({
            success:true,
            result:product
        })
    } catch (error) {
        console.log(error);
        
    }
}

const controller = {
  createProduct,
  productList,
  searchProductId
};

module.exports = controller;
