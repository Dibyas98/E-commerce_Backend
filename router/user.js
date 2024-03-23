const express = require("express");

const router = express.Router();
const userControler = require('../controller/user')

router.post('/registation',userControler.userRegistation);
router.get('/login',userControler.userLogin);
router.post('/logout',userControler.userLogout);

module.exports= router