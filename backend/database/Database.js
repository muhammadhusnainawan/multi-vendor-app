const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb is connected at ${process.env.HOST}`);
  } catch (error) {
    console.log(`Error connecting to MongoDb is ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
