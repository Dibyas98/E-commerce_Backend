const express = require("express");
const router = express.Router();
const authMiddleWare = require('../middleware/authMiddleWare')
const productController = require("../controller/product");
const likedDisliked = require("../controller/likeDislike")
router.post("/post_Product", authMiddleWare('admin'), productController.createProduct);
router.post('/edit_Product',authMiddleWare('admin'), productController.editProduct);
router.get("/list",productController.productList);
router.get("/:id",productController.searchProductId);
router.post("/:product_Id/review",authMiddleWare(['admin','buyer']),productController.reviewProduct);

router.post("/:actions",likedDisliked)

module.exports = router;
