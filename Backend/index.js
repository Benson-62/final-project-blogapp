const express = require("express");
const cors = require("cors");
require('./connection');
var BlogModel = require("./model");
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());

app.post("/post",async(req,res)=>{
  try{
    await BlogModel(req.body).save();
    res.send("Data Added!");
  }
  catch(error){
    console.log(error);
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.put('/edit/:id',async(req,res)=>{
  var id=req.params.id;
  try {
      await BlogModel.findByIdAndUpdate(id,req.body);
      res.send("update done")
  } catch (error) {
      console.log(error);
  }
});

app.delete('/delete/:id',async(req,res)=>{
  var id=req.params.id
  try {
      await BlogModel.findByIdAndDelete(id);
      res.send("Deleted sucessfully")

  } catch (error) {
      console.log(error);
      
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});