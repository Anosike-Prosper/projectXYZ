const mongoose = require("mongoose");
const {MONGO_URL} = require('./config')




function connectToMongoDB() {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connection to MongoDB successful");
    })
    .catch((err) => {
      console.log("Connection to MongoDB failed", err);
    });
}

module.exports = { connectToMongoDB };
