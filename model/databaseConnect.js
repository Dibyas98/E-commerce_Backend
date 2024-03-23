const mongoose = require("mongoose");
/*
=====================================================
            DATABASE CONNECTION
=====================================================
*/

function dbCONNECT(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Database Connection Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbCONNECT;
