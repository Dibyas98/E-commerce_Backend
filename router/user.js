const express = require("express");

const router = express.Router();
const userControler = require('../controller/user')

router.post('/registation',userControler.userRegistation);
router.get('/login',userControler.userLogin);

module.exports= router