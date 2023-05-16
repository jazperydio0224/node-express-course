const mongoose = require('mongoose');

const connectDB = async(url) => {
  const connection = await mongoose.connect(url);
  console.log('Connected to the Database...');
  return connection;
}

module.exports = connectDB;