const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("Connect Databse");
  return mongoose.connect(uri);
};

module.exports = connectDB;
