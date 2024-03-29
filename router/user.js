const express = require("express");

const router = express.Router();
const userControler = require('../controller/user')
const authMiddleWare = require("../middleware/authMiddleWare")


router.post('/registation',userControler.userRegistation);
router.get('/login',userControler.userLogin);
router.post('/logout',userControler.userLogout);
router.post("/wishlist", authMiddleWare("buyer"),userControler.wishList);
router.post("/new_Address",authMiddleWare(["admin","buyer"]),userControler.newAddress);
router.delete("/delete/:address_Id",authMiddleWare(["admin","buyer"]),userControler.deleteAddress)

module.exports= router