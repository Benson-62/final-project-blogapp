import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  var navigate = useNavigate();
  var location = useLocation();
  var [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log("in",inputs);
  };

  useEffect(()=>{
    if(location.state != null){
      setInputs({...inputs,title: location.state.val.title, content:location.state.val.content, img_url : location.state.val.img_url})
    }
  },[])


  const addData = () => {
    if(location.state != null){
      axios.put('http://localhost:3001/edit/'+location.state.val._id,inputs).then((res)=>{
        console.log(res.data)
        navigate('/');
      }).catch((error)=>{
          console.log(error);
      })
    }
    else{
      console.log("clicked");
      axios
        .post("http://localhost:3001/post",inputs)
        .then((res) => {
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "90vh",
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Title"
              onChange={inputHandler}
              name="title"
              value={inputs.title}
              fullWidth
            />
            <TextField
              variant="outlined"
              placeholder="content"
              onChange={inputHandler}
              name="content"
              value={inputs.content}
              multiline={4}
            />
            <TextField
              variant="outlined"
              placeholder="image url"
              onChange={inputHandler}
              name="img_url"
              value={inputs.img_url}
            />

            <Button variant="contained" color="secondary" onClick={addData}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Add;