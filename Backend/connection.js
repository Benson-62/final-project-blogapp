const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect('mongodb+srv://adisankarlalan123:I6YyjlSqOch2Qnsg@cluster0.b5fdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });