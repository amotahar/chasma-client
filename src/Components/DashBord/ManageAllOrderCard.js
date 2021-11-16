import React from "react";
import { Link } from "react-router-dom";

const ManageAllOrderCard = (props) => {
  const { name,email,address,phone } = props.order;
  console.log(name);
  return (
    <div className='col-lg-3'>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Name: {name}</h4>
         
          <p class="card-text text-light">{email}</p>
          <p class="card-text text-light">{address}</p>
          <p class="card-text text-light">{phone}</p>
         
          <button className='btn btn-primary disabled'>Deliver</button>
          <Link className='btn btn-primary ml-3'>Cencel</Link>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderCard;
