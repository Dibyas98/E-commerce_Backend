const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: false,
        deault: "",
      },
      city: {
        type: String,
        requied: false,
        default: "",
      },
      state: {
        type: String,
        requied: true,
        default: "",
      },
      pincode: {
        type: String,
        requied: true,
        default: "",
      },
});

module.exports = addressSchema