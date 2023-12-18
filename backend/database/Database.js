const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb is connected at ${data.connection.host}`);
  } catch (error) {
    console.log(`Error connecting to MongoDb is ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
