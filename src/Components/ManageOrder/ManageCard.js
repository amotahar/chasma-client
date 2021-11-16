/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef } from "react";
import { Link } from "react-router-dom";



const ManageCard = (props) => {
  const {name, Desc,image,price}=props.user;

  // Add to my order
  const nameRef = useRef();


  // Load Data from ref
  const loadData=()=>{
    const nameData = nameRef.current.innerText;
    console.log(nameData);
  }

 



  return (
    <div className='col-lg-4'>
        <div className="card ">
          <img
            className="card-img-top"
            src={image}
            alt="Card image cap"
          />
          <div className="card-body">
            
            <h4 ref={nameRef}  className="card-title">Offer Name: <span className='text-danger'>{name}</span></h4>
            <h4 className="card-title">Price : ${price}</h4>
            <p className="card-text">
             {Desc}
            </p>
           
            <button className="btn btn-primary" onClick={loadData}>Booking Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default ManageCard;
