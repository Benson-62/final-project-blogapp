const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://BensonBVarghese:Bhavana@cluster0.jpozxh8.mongodb.net/StudentDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });