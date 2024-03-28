const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../router/user");

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
      message: "User already Register",
    });
  }
};

/*=========================== USER LOGIN ==============================================*/
const userLogin = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    const IsPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (IsPasswordCorrect) {
      const expire = Math.floor(new Date().getTime() / 1000 + 12 * 3600);
      const payload = {
        id: user._id,
        name: user.firstname + " " + user.lastname,
        role:user.role,
        exp: expire,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
      // user.token = token
      // await userModel.findByIdAndUpdate(user._id, { token: token });
      res.json({
        success: true,
        message: "Login Successfully",
        token,
        user
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

/*=========================== USER LOGOUT ===========================================*/

const userLogout = async (req, res) => {
  try {
    await userModel.findByIdAndUpdate(req.body.id, { token: "" });
    res.json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};


/*=========WISHLISTS============== */

const wishList = async (req,res) =>{
  console.log( req.query.product_Id);
  try {
    if(req.query.add){
      await userModel.findByIdAndUpdate(req.user._id,{$pull: {wishlist : req.query.product_Id}}).populate("wishlist");
      res.json({
        success: true,
        message:"WishList removed Successfully"
      })

    }else{
      await userModel.findByIdAndUpdate(req.user._id,{$push: {wishlist : req.query.product_Id}}).populate("wishlist");
      res.json({
        success: true,
        message:"WishList added Successfully"
      })
    }
    
  } catch (error) {
    console.log(error);
  }
}

const controller = {
  userRegistation,
  userLogin,
  userLogout,
  wishList
};

module.exports = controller;
