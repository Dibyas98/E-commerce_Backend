const userModel = require("../model/user");


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












const controller = {
  userRegistation,
};

module.exports = controller;
