const userModel = require("../model/user");
const bcrypt = require("bcrypt");

/*=================================USER REGISTATION CONTROLLER==============*/

const userRegistation = async (req, res) => {
  try {
    const newUser = new userModel({
      ...req.body,
    });
    await newUser.save();
    res.json({
      success: true,
      message: "User registation successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "User not Regestation",
    });
  }
};

/*====================================================================================*/
/*====================================================================================*/

/*=========================== USER LOGIN ==============================================*/
const userLogin = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    const IsPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (IsPasswordCorrect) {
      res.json({
        success: true,
        message: "Login Successfully",
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid User",
    });
  }
};

const controller = {
  userRegistation,
  userLogin,
};

module.exports = controller;
