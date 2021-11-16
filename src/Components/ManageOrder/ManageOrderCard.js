import React from "react";
// import title_separate from "../../../Media/title_separate.png";
import { useEffect } from "react";
import { useState } from "react";
import ManageCard from "./ManageCard";


const ManageOrderCard = () => {

  // control user
  const [user,setUser]=useState([])
  useEffect(()=>{
      fetch('https://still-brushlands-71573.herokuapp.com/product')
      .then(res=>res.json())
      .then(data=>setUser(data))
  },[])

  return (
    <div className="container pt-5 Services">
      <div className="row">
        <div className="col text-center">
          <h2>
           Tevily is a World Leading  <span className='theme-color'>Online</span> Tour Booking Platform
          </h2>
          {/* <img src={title_separate} alt="" /> */}
          <p className="w-75 m-auto">
          Top Tour Operators and Travel Agency. We offering in total 793 tours and holidays throughout the world. Combined we have received 1532 customer reviews and an average rating of 5 out of 5 stars.
          </p>
        </div>
      </div>

      {/* Service Card  */}
      <div className="row">
      {user.map((user) => (
                <ManageCard user={user} key={user._id}></ManageCard>
              ))}
      </div>
    </div>
  );
};

export default ManageOrderCard;

