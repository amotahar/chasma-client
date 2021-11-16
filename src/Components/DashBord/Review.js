import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Footer from "../Footer/Footer";
import DashbordHeader from "./DashbordHeder";
import "./DashBord.css";
import UseAuth from "../../Hook/useAuth";

const Review = () => {
  const { user } = UseAuth();
  const dName = user.displayName;
  
  const textRef = useRef();
  const reviewRef = useRef();


  const [value, setValue] = useState(2);

  // Hendel review

  const reviewHendel= (e)=>{
    
    const textSlice = textRef.current.value;
    const text= textSlice.slice(0,100);


    const newReview = {text, value,dName};
    console.log(newReview);
    textRef.current.value='';


   // API Load
   fetch("https://still-brushlands-71573.herokuapp.com/review", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newReview),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        e.target.reset();
      }
    });
  }



  return (
    <div>
      <DashbordHeader></DashbordHeader>

      <div className="review">
        <div class="card w-50 m-auto">
          <div class="card-body">
            <h4 class="card-title text-light">Submit Your Review!</h4>
            <textarea ref={textRef} rows="4" cols="40" name="comment"  required form="usrform">
              
            </textarea>

            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend" className='text-light'>Review</Typography>
              <Rating
                name="simple-controlled"
                ref={reviewRef}
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
              
                  
                }}
              />
            </Box>
            <button onClick={reviewHendel} className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Review;
