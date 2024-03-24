const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
router.post("/post_Product", productController.createProduct);
router.get("/list",productController.productList)
router.get("/:id",productController.searchProductId)

module.exports = router;
