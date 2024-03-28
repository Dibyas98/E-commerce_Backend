const express = require("express");

const router = express.Router();
const userControler = require('../controller/user')
const authMiddleWare = require("../middleware/authMiddleWare")


router.post('/registation',userControler.userRegistation);
router.get('/login',userControler.userLogin);
router.post('/logout',userControler.userLogout);
router.post("/wishlist", authMiddleWare("buyer"),userControler.wishList)

module.exports= router