const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Products_data');
    console.log('Connect Successfully!!!!');
  } catch (error) {
    console.log('Connect Failure!!!');
  }
}

module.exports = { connect };


