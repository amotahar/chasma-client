import React from "react";
import "./Services.css";
// import img from '../../../image/title_separate.png';
import { useEffect } from "react";
import { useState } from "react";
import Service_card from "./Product_card";
import Product_card from "./Product_card";
import Product_card_Home from "./Product_card_Home";


const ProductHome = () => {

  // control user
  const [user,setUser]=useState([])
  useEffect(()=>{
      fetch('https://still-brushlands-71573.herokuapp.com/product')
      .then(res=>res.json())
      .then(data=>setUser(data))
  },[])
  const reverseUser = user.reverse();
  const userSlice= reverseUser.slice(0,6);


  // const userSlice= userReverse.slice(0,6);

  return (
    <div className="Services">
    <div className="container pt-5">
      <div className="row">
        <div className="col text-center">
          <h2>
          Qualitypolarized <span className='theme-color'>Man & Woman </span> Eyewear Sunglass  
          </h2>
          <img src='' alt="" />
          <p className="w-50 m-auto text-light">
          Eye chasmish are very important for thos whos have some difficult in their eye to see every hing clearly and perfectly
          </p>
        </div>
      </div>

      {/* Service Card  */}
      <div className="row">
      {userSlice.map((user) => (
        
                <Product_card_Home user={user} key={user._id}>
                 
                </Product_card_Home>
              ))}
      </div>
    </div>
    </div>
  );
};

export default ProductHome;
