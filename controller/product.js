const productModel = require("../model/product");

/*================NEW PRODUCT CREATE=============*/
const createProduct = async (req, res) => {
  try {
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

/*================= EDIT PRODUCT ==========*/

const editProduct = async (req, res) => {
  try {
    await productModel.findByIdAndUpdate(req.query.id, req.body);
    res.json({
      success: true,
      message: "Edit successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

/*==================SEARCH PRODUCT ==============*/

const productList = async (req, res) => {
  try {
    const list = await productModel
      .find({
        $or: [
          { title: { $regex: req.query.search, $options: "i" } },
          { category: { $regex: req.query.search, $options: "i" } },
        ],
      })
      .populate({ path: "likes", select: { email: 1 } });

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

const searchProductId = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("likes");
    res.json({
      success: true,
      result: product,
    });
  } catch (error) {
    console.log(error);
  }
};

const controller = {
  createProduct,
  editProduct,
  productList,
  searchProductId,
};

module.exports = controller;
