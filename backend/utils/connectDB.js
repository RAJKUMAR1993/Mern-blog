const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(`mongodb://localhost:27017/blog`);
    console.log("DB  Connected Successfully ");
  } catch (error) {
    console.log(`Error  Connected MongoBD ${error.message} `);
    process.exit(1);
  }
};

module.exports = connectDB;
// cmd : mongosh
// username : rajkumarramineni19
//password : ocx3vU6f24rhSOMM
// URL: mongodb+srv://rajkumarramineni19:<password>@blog-cluster.ghhogax.mongodb.net/?retryWrites=true&w=majority
