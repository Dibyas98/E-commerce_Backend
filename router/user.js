const express = require("express");

const router = express.Router();
const userControler = require('../controller/user')

router.post('/registation',userControler.userRegistation);

module.exports= router