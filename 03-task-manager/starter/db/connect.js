// getting-started.js
const mongoose = require("mongoose");

const connectDB = async (url) => {
  const connection = await mongoose.connect(url);
  console.log("Connected to the DATABASE...");
  return connection;
};

module.exports = connectDB;
